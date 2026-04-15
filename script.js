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
    1: [
      {
        period: 1,
        subject: '자습',
        startTime: '08:50',
        endTime: '09:40',
        attendance: 30,
        lateness: 0,
        absence: 1,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '화법과 작문',
        startTime: '10:10',
        endTime: '11:00',
        attendance: 30,
        lateness: 0,
        absence: 1,
        maxProgress: 85
      },
      {
        period: 3,
        subject: '자습',
        startTime: '11:30',
        endTime: '12:20',
        attendance: 30,
        lateness: 0,
        absence: 1,
        maxProgress: 0
      }
    ],
    2: [
      {
        period: 1,
        subject: '언어와 매체',
        startTime: '08:50',
        endTime: '09:40',
        attendance: 28,
        lateness: 1,
        absence: 1,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '자습',
        startTime: '10:10',
        endTime: '11:00',
        attendance: 28,
        lateness: 1,
        absence: 1,
        maxProgress: 60
      },
      {
        period: 3,
        subject: '고급 수학 I',
        startTime: '11:30',
        endTime: '12:20',
        attendance: 28,
        lateness: 1,
        absence: 1,
        maxProgress: 0
      }
    ],
    3: [
      {
        period: 1,
        subject: '자습',
        startTime: '08:50',
        endTime: '09:40',
        attendance: 29,
        lateness: 0,
        absence: 1,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '미적분',
        startTime: '10:10',
        endTime: '11:00',
        attendance: 29,
        lateness: 0,
        absence: 1,
        maxProgress: 78
      },
      {
        period: 3,
        subject: '자습',
        startTime: '11:30',
        endTime: '12:20',
        attendance: 29,
        lateness: 0,
        absence: 1,
        maxProgress: 0
      }
    ],
    4: [
      {
        period: 1,
        subject: '윤리와 사상',
        startTime: '08:50',
        endTime: '09:40',
        attendance: 30,
        lateness: 0,
        absence: 1,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '영어 독해와 작문',
        startTime: '10:10',
        endTime: '11:00',
        attendance: 30,
        lateness: 0,
        absence: 1,
        maxProgress: 72
      },
      {
        period: 3,
        subject: '자습',
        startTime: '11:30',
        endTime: '12:20',
        attendance: 30,
        lateness: 0,
        absence: 1,
        maxProgress: 0
      }
    ]
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
  const [startHour, startMin] = startTime.split(':').map(Number);
  const startSeconds = startHour * 3600 + startMin * 60;
  const targetEndSeconds = startSeconds + 50 * 60;
  const nowSeconds = getSecondsFromMidnight(now);

  if (nowSeconds < startSeconds) {
    return { status: 'upcoming', label: '예정' };
  } else if (nowSeconds <= targetEndSeconds) {
    return { status: 'proceeding', label: '진행중' };
  } else {
    return { status: 'completed', label: '완료' };
  }
}

function getSecondsFromMidnight(date) {
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

function getTimeProgress(startTime, endTime) {
  const now = new Date();
  const nowSeconds = getSecondsFromMidnight(now);
  const [startHour, startMin] = startTime.split(':').map(Number);
  const startSeconds = startHour * 3600 + startMin * 60;
  const targetEndSeconds = startSeconds + 50 * 60;
  const totalSeconds = 50 * 60;
  const elapsedSeconds = Math.min(Math.max(0, nowSeconds - startSeconds), totalSeconds);

  return {
    progressPercent: Math.round((elapsedSeconds / totalSeconds) * 100),
    secondsUntilStart: Math.max(0, startSeconds - nowSeconds),
    secondsRemaining: Math.max(0, targetEndSeconds - nowSeconds)
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

// ?�험 ?�정 ?�더�?
function renderSchedule(day) {
  const schedule = examData[selectedGrade][day];
  const container = document.getElementById('scheduleContainer');
  container.innerHTML = '';

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
      : '완료';

    const progressBarLabel = statusInfo.status === 'completed'
      ? '완료'
      : '50분';

    const periodDiv = document.createElement('div');
    periodDiv.className = `exam-period ${progressClass} period-bg-${exam.period}`;

    periodDiv.innerHTML = `
      <div class="period-header">
        <div class="period-number">${exam.period}교시</div>
        <div class="period-title-row">
          <div class="period-subject">${exam.subject}</div>
          <div class="period-meta">
            <span class="period-time">${exam.startTime} ~ ${exam.endTime}</span>
            <span class="progress-pill">${progressLabel}</span>
          </div>
        </div>
        <span class="status-badge ${statusBadgeClass}">${statusInfo.label}</span>
      </div>
      <div class="period-progress">
        <div class="progress-track">
          <div class="progress-fill ${progressClass}" style="width: ${progressPercent}%"></div>
          <div class="progress-text">${progressBarLabel}</div>
        </div>
      </div>
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
