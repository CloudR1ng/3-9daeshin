const grade3NationalAssessmentSchedule = [
  {
    period: 1,
    subject: '국어',
    startTime: '08:40',
    endTime: '10:00',
    attendance: 30,
    lateness: 0,
    absence: 1
  },
  {
    period: 2,
    subject: '수학',
    startTime: '10:20',
    endTime: '12:00',
    attendance: 30,
    lateness: 0,
    absence: 1
  },
  {
    period: 3,
    subject: '영어',
    startTime: '13:30',
    endTime: '14:40',
    attendance: 30,
    lateness: 0,
    absence: 1
  },
  {
    period: 4,
    subject: '한국사 / 탐구',
    startTime: '15:00',
    endTime: '16:47',
    attendance: 30,
    lateness: 0,
    absence: 1,
    segments: [
      {
        subject: '한국사',
        startTime: '15:00',
        endTime: '15:30'
      },
      {
        subject: '탐구1',
        startTime: '15:45',
        endTime: '16:15'
      },
      {
        subject: '탐구2',
        startTime: '16:17',
        endTime: '16:47'
      }
    ]
  }
];

// ?�험 ?�이??
const examData = {
  1: {
    1: [
      {
        period: 1,
        subject: '한국사1',
        startTime: '08:50',
        endTime: '09:40',
        attendance: 28,
        lateness: 2,
        absence: 1,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '자습',
        startTime: '10:10',
        endTime: '11:00',
        attendance: 28,
        lateness: 2,
        absence: 1,
        maxProgress: 45
      },
      {
        period: 3,
        subject: '공통국어1',
        startTime: '11:30',
        endTime: '12:20',
        attendance: 28,
        lateness: 2,
        absence: 1,
        maxProgress: 0
      }
    ],
    2: [
      {
        period: 1,
        subject: '자습',
        startTime: '08:50',
        endTime: '09:40',
        attendance: 29,
        lateness: 1,
        absence: 1,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '공통수학1',
        startTime: '10:10',
        endTime: '11:00',
        attendance: 29,
        lateness: 1,
        absence: 1,
        maxProgress: 70
      },
      {
        period: 3,
        subject: '자습',
        startTime: '11:30',
        endTime: '12:20',
        attendance: 29,
        lateness: 1,
        absence: 1,
        maxProgress: 0
      }
    ],
    3: [
      {
        period: 1,
        subject: '통합과학1',
        startTime: '08:50',
        endTime: '09:40',
        attendance: 27,
        lateness: 3,
        absence: 1,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '자습',
        startTime: '10:10',
        endTime: '11:00',
        attendance: 27,
        lateness: 3,
        absence: 1,
        maxProgress: 55
      },
      {
        period: 3,
        subject: '공통영어1',
        startTime: '11:30',
        endTime: '12:20',
        attendance: 27,
        lateness: 3,
        absence: 1,
        maxProgress: 0
      }
    ],
    4: [
      {
        period: 1,
        subject: '독서 토론과 글쓰기',
        startTime: '08:50',
        endTime: '09:40',
        attendance: 30,
        lateness: 0,
        absence: 1,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '자습',
        startTime: '10:10',
        endTime: '11:00',
        attendance: 30,
        lateness: 0,
        absence: 1,
        maxProgress: 80
      },
      {
        period: 3,
        subject: '통합사회1',
        startTime: '11:30',
        endTime: '12:20',
        attendance: 30,
        lateness: 0,
        absence: 1,
        maxProgress: 0
      }
    ]
  },
  2: {
    1: [
      {
        period: 1,
        subject: '자습',
        startTime: '08:50',
        endTime: '09:40',
        attendance: 27,
        lateness: 1,
        absence: 2,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '대수',
        startTime: '10:10',
        endTime: '11:00',
        attendance: 27,
        lateness: 1,
        absence: 2,
        maxProgress: 65
      },
      {
        period: 3,
        subject: '사회와 문화',
        startTime: '11:30',
        endTime: '12:20',
        attendance: 27,
        lateness: 1,
        absence: 2,
        maxProgress: 0
      }
    ],
    2: [
      {
        period: 1,
        subject: '문학',
        startTime: '08:50',
        endTime: '09:40',
        attendance: 28,
        lateness: 0,
        absence: 1,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '세계사',
        startTime: '10:10',
        endTime: '11:00',
        attendance: 28,
        lateness: 0,
        absence: 1,
        maxProgress: 55
      },
      {
        period: 3,
        subject: '물리학',
        startTime: '11:30',
        endTime: '12:20',
        attendance: 28,
        lateness: 0,
        absence: 1,
        maxProgress: 0
      }
    ],
    3: [
      {
        period: 1,
        subject: '한국지리 탐구',
        startTime: '08:50',
        endTime: '09:40',
        attendance: 26,
        lateness: 2,
        absence: 2,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '미적분 I',
        startTime: '10:10',
        endTime: '11:00',
        attendance: 26,
        lateness: 2,
        absence: 2,
        maxProgress: 35
      },
      {
        period: 3,
        subject: '생명과학',
        startTime: '11:30',
        endTime: '12:20',
        attendance: 26,
        lateness: 2,
        absence: 2,
        maxProgress: 0
      }
    ],
    4: [
      {
        period: 1,
        subject: '정치',
        startTime: '08:50',
        endTime: '09:40',
        attendance: 29,
        lateness: 0,
        absence: 1,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '영어 I',
        startTime: '10:10',
        endTime: '11:00',
        attendance: 29,
        lateness: 0,
        absence: 1,
        maxProgress: 75
      },
      {
        period: 3,
        subject: '화학',
        startTime: '11:30',
        endTime: '12:20',
        attendance: 29,
        lateness: 0,
        absence: 1,
        maxProgress: 0
      }
    ]
  },
  3: {
    1: grade3NationalAssessmentSchedule,
    2: grade3NationalAssessmentSchedule,
    3: grade3NationalAssessmentSchedule,
    4: grade3NationalAssessmentSchedule
  }
};

let selectedGrade = 1;
let selectedDay = 1;
const attendanceState = {};

function createDefaultAttendanceState() {
  Object.keys(examData).forEach(gradeKey => {
    const grade = Number(gradeKey);
    attendanceState[grade] = {};

    Object.keys(examData[grade]).forEach(dayKey => {
      const day = Number(dayKey);
      const firstExam = examData[grade][day][0];
      attendanceState[grade][day] = {
        attendance: firstExam.attendance,
        lateness: firstExam.lateness,
        absence: firstExam.absence,
        total: firstExam.attendance + firstExam.lateness + firstExam.absence
      };
    });
  });
}
createDefaultAttendanceState();

// ?�재 ?�간??기�??�로 ?�험 ?�태 ?�단
function getStatus(period, startTime, endTime) {
  const now = new Date();
  const { startSeconds, endSeconds } = getTimeWindow(startTime, endTime);
  const nowSeconds = getSecondsFromMidnight(now);

  if (nowSeconds < startSeconds) {
    return { status: 'upcoming', label: '예정' };
  } else if (nowSeconds <= endSeconds) {
    return { status: 'proceeding', label: '진행중' };
  } else {
    return { status: 'completed', label: '완료' };
  }
}

function getSecondsFromMidnight(date) {
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

function getTimeWindow(startTime, endTime) {
  const [startHour, startMin] = startTime.split(':').map(Number);
  const [endHour, endMin] = endTime.split(':').map(Number);
  const startSeconds = startHour * 3600 + startMin * 60;
  let endSeconds = endHour * 3600 + endMin * 60;

  if (endSeconds <= startSeconds) {
    endSeconds += 24 * 3600;
  }

  return {
    startSeconds,
    endSeconds,
    totalSeconds: endSeconds - startSeconds
  };
}

function getTimeProgress(startTime, endTime) {
  const now = new Date();
  const nowSeconds = getSecondsFromMidnight(now);
  const { startSeconds, endSeconds, totalSeconds } = getTimeWindow(startTime, endTime);
  const elapsedSeconds = Math.min(Math.max(0, nowSeconds - startSeconds), totalSeconds);

  return {
    progressPercent: Math.round((elapsedSeconds / totalSeconds) * 100),
    secondsUntilStart: Math.max(0, startSeconds - nowSeconds),
    secondsRemaining: Math.max(0, endSeconds - nowSeconds),
    totalSeconds
  };
}

function formatCountdown(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  } else {
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  }
}

function selectGrade(grade) {
  selectedGrade = grade;
  document.querySelectorAll('.grade-btn').forEach(btn => btn.classList.remove('active'));
  const button = document.querySelector(`.grade-btn[data-grade="${grade}"]`);
  if (button) button.classList.add('active');
  renderSchedule(selectedDay);
}

// ?�짜 ?�택 ?�벤??
function selectDay(day) {
  selectedDay = day;
  document.querySelectorAll('.day-btn').forEach(btn => btn.classList.remove('active'));
  const button = document.querySelector(`.day-btn[data-day="${day}"]`);
  if (button) button.classList.add('active');
  renderSchedule(day);
}

function getProgressClass(progress) {
  if (progress === 100) return 'progress-complete';
  if (progress >= 70) return 'progress-active';
  if (progress > 0) return 'progress-warm';
  return 'progress-pending';
}

function createProgressHtml(progressPercent, progressClass, label, extraClass = '') {
  return `
    <div class="progress-track ${extraClass}">
      <div class="progress-fill ${progressClass}" style="width: ${progressPercent}%"></div>
      <div class="progress-text">${label}</div>
    </div>
  `;
}

function createSegmentTimelineHtml(segments) {
  return `
    <div class="period-segments">
      ${segments.map(segment => {
        const segmentProgress = getTimeProgress(segment.startTime, segment.endTime);
        const segmentProgressClass = getProgressClass(segmentProgress.progressPercent);
        const segmentDurationLabel = `${Math.round(segmentProgress.totalSeconds / 60)}분`;

        return `
          <div class="period-segment ${segmentProgressClass}">
            <div class="segment-subject">${segment.subject}</div>
            <div class="segment-time">${segment.startTime} ~ ${segment.endTime}</div>
            ${createProgressHtml(segmentProgress.progressPercent, segmentProgressClass, segmentDurationLabel, 'segment-progress')}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function createAssessmentProgress(startTime, endTime) {
  const timeProgress = getTimeProgress(startTime, endTime);
  const progressClass = getProgressClass(timeProgress.progressPercent);
  const durationLabel = `${Math.round(timeProgress.totalSeconds / 60)}분`;

  return createProgressHtml(timeProgress.progressPercent, progressClass, durationLabel, 'assessment-progress');
}

function createAssessmentRow(exam) {
  const durationHtml = createAssessmentProgress(exam.startTime, exam.endTime);

  if (Array.isArray(exam.segments) && exam.segments.length > 0) {
    return `
      <section class="assessment-row assessment-row-split period-bg-${exam.period}">
        <div class="assessment-period">${exam.period}교시</div>
        <div class="assessment-segments">
          ${exam.segments.map(segment => `
            <div class="assessment-segment">
              <div class="assessment-subject">${segment.subject}</div>
              <div class="assessment-time">${segment.startTime} ~ ${segment.endTime}</div>
              ${createAssessmentProgress(segment.startTime, segment.endTime)}
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  return `
    <section class="assessment-row period-bg-${exam.period}">
      <div class="assessment-period">${exam.period}교시</div>
      <div class="assessment-main">
        <div class="assessment-subject">${exam.subject}</div>
        <div class="assessment-time">${exam.startTime} ~ ${exam.endTime}</div>
      </div>
      <div class="assessment-duration">${durationHtml}</div>
    </section>
  `;
}

function renderGrade3AssessmentSchedule(schedule, container) {
  container.className = 'exam-schedule assessment-schedule';
  container.innerHTML = schedule.map(createAssessmentRow).join('');
}

// ?�험 ?�정 ?�더�?
function renderSchedule(day) {
  const schedule = examData[selectedGrade][day];
  const container = document.getElementById('scheduleContainer');
  container.className = 'exam-schedule';
  container.innerHTML = '';

  if (selectedGrade === 3) {
    renderGrade3AssessmentSchedule(schedule, container);
    updateAttendance(day);
    return;
  }

  schedule.forEach(exam => {
    const statusInfo = getStatus(exam.period, exam.startTime, exam.endTime);
    const timeProgress = getTimeProgress(exam.startTime, exam.endTime);
    const progressPercent = timeProgress.progressPercent;
    const statusBadgeClass = `status-${statusInfo.status}`;
    const progressClass = getProgressClass(progressPercent);
    const progressLabel = statusInfo.status === 'proceeding'
      ? `진행 ${progressPercent}% · 남은 ${formatCountdown(timeProgress.secondsRemaining)}`
      : statusInfo.status === 'upcoming'
      ? `시작까지 ${formatCountdown(timeProgress.secondsUntilStart)}`
      : '';

    const durationLabel = `${Math.round(timeProgress.totalSeconds / 60)}분`;
    const progressBarLabel = durationLabel;

    const progressPillHtml = progressLabel
      ? `<span class="progress-pill">${progressLabel}</span>`
      : '';
    const hasSegments = Array.isArray(exam.segments) && exam.segments.length > 0;
    const bodyHtml = hasSegments
      ? createSegmentTimelineHtml(exam.segments)
      : `
        <div class="period-progress">
          ${createProgressHtml(progressPercent, progressClass, progressBarLabel)}
        </div>
      `;

    const periodDiv = document.createElement('div');
    periodDiv.className = `exam-period ${progressClass} period-bg-${exam.period}${hasSegments ? ' period-with-segments' : ''}`;

    periodDiv.innerHTML = `
      <div class="period-header">
        <div class="period-number">${exam.period}교시</div>
        <div class="period-title-row">
          <div class="period-subject">${exam.subject}</div>
          <div class="period-meta">
            <span class="period-time">${exam.startTime} ~ ${exam.endTime}</span>
            ${progressPillHtml}
          </div>
        </div>
        <span class="status-badge ${statusBadgeClass}">${statusInfo.label}</span>
      </div>
      ${bodyHtml}
    `;

    container.appendChild(periodDiv);
  });

  updateAttendance(day);
}

// 출석 ?�황 ?�데?�트
function updateAttendance(day) {
  const summary = attendanceState[selectedGrade][day];
  document.getElementById('attendanceCount').textContent = summary.attendance;
  document.getElementById('latenessCount').textContent = summary.lateness;
  document.getElementById('absenceCount').textContent = summary.absence;
  document.getElementById('totalCount').textContent = summary.total;
}

function updateCardValues(day) {
  const summary = attendanceState[selectedGrade][day];
  document.querySelectorAll('.attendance-card').forEach(card => {
    const key = card.dataset.key;
    const valueEl = card.querySelector('.attendance-number');
    valueEl.textContent = summary[key];
  });
}

function syncTotal() {
  const summary = attendanceState[selectedGrade][selectedDay];
  summary.total = summary.attendance + summary.lateness + summary.absence;
}

function setupAttendanceCardEditing() {
  document.querySelectorAll('.attendance-card').forEach(card => {
    const key = card.dataset.key;
    const valueEl = card.querySelector('.attendance-number');
    const inputEl = card.querySelector('.attendance-input');

    card.addEventListener('mouseenter', () => {
      inputEl.value = attendanceState[selectedGrade][selectedDay][key];
      valueEl.style.opacity = '0';
      inputEl.style.opacity = '1';
      inputEl.style.pointerEvents = 'auto';
      inputEl.focus();
    });

    card.addEventListener('mouseleave', () => {
      const newValue = Number(inputEl.value);
      if (!Number.isNaN(newValue)) {
        attendanceState[selectedGrade][selectedDay][key] = newValue;
        if (key !== 'total') {
          syncTotal();
        }
      }
      updateAttendance(selectedDay);
      valueEl.style.opacity = '1';
      inputEl.style.opacity = '0';
      inputEl.style.pointerEvents = 'none';
    });

    inputEl.addEventListener('mousedown', event => event.stopPropagation());
    inputEl.addEventListener('blur', () => {
      const newValue = Number(inputEl.value);
      if (!Number.isNaN(newValue)) {
        attendanceState[selectedGrade][selectedDay][key] = newValue;
        if (key !== 'total') {
          syncTotal();
        }
      }
      updateAttendance(selectedDay);
      valueEl.style.opacity = '1';
      inputEl.style.opacity = '0';
      inputEl.style.pointerEvents = 'none';
    });
  });
}

// ?�간 ?�데?�트
function updateTime() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('ko-KR', { hour12: false });
  const dateStr = now.toLocaleDateString('ko-KR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  document.getElementById('currentTime').textContent = timeStr;
  document.getElementById('currentDate').textContent = dateStr;
}

// 초기??
window.addEventListener('DOMContentLoaded', function() {
  renderSchedule(1);
  updateTime();
  setInterval(() => {
    updateTime();
    renderSchedule(selectedDay);
  }, 1000);
  setupAttendanceCardEditing();
});
