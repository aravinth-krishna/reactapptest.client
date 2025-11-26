"use client";
import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid"; // ✅ added
import interactionPlugin from "@fullcalendar/interaction";
import styles from "./Schedule.module.css";

// Local storage key for persistence
const STORAGE_KEY = "studyPlannerEvents_v1";

// Simple ID generator
function uid() {
  return String(Math.random()).slice(2);
}

// Example default sessions (Monday of current week)
function defaultEvents() {
  const today = new Date();
  const monday = new Date(today);

  const day = monday.getDay();
  const diff = (day === 0 ? -6 : 1) - day;
  monday.setDate(monday.getDate() + diff);
  monday.setHours(9, 0, 0, 0);

  return [
    {
      id: uid(),
      title: "Math — Algebra Basics",
      start: new Date(monday).toISOString(),
      end: new Date(monday.getTime() + 60 * 60 * 1000).toISOString(),
    },
    {
      id: uid(),
      title: "AI Concepts — Intro Module",
      start: new Date(monday.getTime() + 2 * 60 * 60 * 1000).toISOString(),
      end: new Date(monday.getTime() + 3 * 60 * 60 * 1000).toISOString(),
    },
  ];
}

export default function Schedule() {
  const calendarRef = useRef(null);

  const [events, setEvents] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : defaultEvents();
    } catch {
      return defaultEvents();
    }
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  }, [events]);

  // Create event by selecting range
  function handleSelect(info) {
    const title = prompt("Enter study session title:", "New Study Session");
    if (!title) return;

    setEvents((prev) => [
      ...prev,
      {
        id: uid(),
        title,
        start: info.startStr,
        end: info.endStr,
      },
    ]);
  }

  // Create event by clicking single slot
  function handleDateClick(info) {
    const title = prompt("Quick session title:", "New Session");
    if (!title) return;

    const start = info.date;
    const end = new Date(info.date.getTime() + 60 * 60 * 1000);

    setEvents((prev) => [
      ...prev,
      {
        id: uid(),
        title,
        start: start.toISOString(),
        end: end.toISOString(),
      },
    ]);
  }

  // Move sessions
  function handleEventDrop(info) {
    const event = info.event;

    setEvents((prev) =>
      prev.map((e) =>
        e.id === event.id
          ? {
              ...e,
              start: event.start.toISOString(),
              end: event.end?.toISOString() || null,
            }
          : e
      )
    );
  }

  // Resize sessions
  function handleEventResize(info) {
    const event = info.event;

    setEvents((prev) =>
      prev.map((e) =>
        e.id === event.id
          ? {
              ...e,
              start: event.start.toISOString(),
              end: event.end?.toISOString() || null,
            }
          : e
      )
    );
  }

  // Edit and delete with simple prompt
  function handleEventClick(info) {
    const event = info.event;
    const action = prompt(
      `Edit title OR type DELETE to remove:\nCurrent: ${event.title}`,
      event.title
    );

    if (!action) return;

    if (action.toUpperCase() === "DELETE") {
      if (confirm("Delete this session?")) {
        setEvents((prev) => prev.filter((e) => e.id !== event.id));
      }
      return;
    }

    // update title
    event.setProp("title", action);

    setEvents((prev) =>
      prev.map((e) => (e.id === event.id ? { ...e, title: action } : e))
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Study Planner Calendar</h2>

        <div className={styles.controls}>
          <button
            className={styles.btn}
            onClick={() => {
              const api = calendarRef.current?.getApi();
              api?.today();
            }}
          >
            Today
          </button>

          <button
            className={styles.btn}
            onClick={() => {
              if (confirm("Reset to example schedule?")) {
                setEvents(defaultEvents());
              }
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} // ✅ month + week + day
        initialView="timeGridWeek"
        events={events}
        selectable={true}
        editable={true}
        selectMirror={true}
        nowIndicator={true}
        allDaySlot={false}
        select={handleSelect}
        dateClick={handleDateClick}
        eventDrop={handleEventDrop}
        eventResize={handleEventResize}
        eventClick={handleEventClick}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay", // ✅ correct views
        }}
        slotMinTime="06:00:00"
        slotMaxTime="23:00:00"
        slotDuration="00:30:00"
        height="75vh"
      />
    </div>
  );
}
