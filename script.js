// 시험 데이터
const examData = {
  1: {
    1: [
      {
        period: 1,
        subject: '국어',
        startTime: '09:00',
        endTime: '10:00',
        attendance: 28,
        lateness: 2,
        absence: 1,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '수학',
        startTime: '10:10',
        endTime: '11:10',
        attendance: 28,
        lateness: 2,
        absence: 1,
        maxProgress: 45
      },
      {
        period: 3,
        subject: '영어',
        startTime: '11:20',
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
        subject: '과학',
        startTime: '09:00',
        endTime: '10:00',
        attendance: 29,
        lateness: 1,
        absence: 1,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '사회',
        startTime: '10:10',
        endTime: '11:10',
        attendance: 29,
        lateness: 1,
        absence: 1,
        maxProgress: 70
      },
      {
        period: 3,
        subject: '한국사',
        startTime: '11:20',
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
        subject: '물리',
        startTime: '09:00',
        endTime: '10:00',
        attendance: 27,
        lateness: 3,
        absence: 1,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '화학',
        startTime: '10:10',
        endTime: '11:10',
        attendance: 27,
        lateness: 3,
        absence: 1,
        maxProgress: 55
      },
      {
        period: 3,
        subject: '생물',
        startTime: '11:20',
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
        subject: '기하',
        startTime: '09:00',
        endTime: '10:00',
        attendance: 30,
        lateness: 0,
        absence: 1,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '미적분',
        startTime: '10:10',
        endTime: '11:10',
        attendance: 30,
        lateness: 0,
        absence: 1,
        maxProgress: 80
      },
      {
        period: 3,
        subject: '확률과통계',
        startTime: '11:20',
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
        subject: '정보',
        startTime: '09:00',
        endTime: '10:00',
        attendance: 27,
        lateness: 1,
        absence: 2,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '영어',
        startTime: '10:10',
        endTime: '11:10',
        attendance: 27,
        lateness: 1,
        absence: 2,
        maxProgress: 65
      },
      {
        period: 3,
        subject: '체육',
        startTime: '11:20',
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
        subject: '세계사',
        startTime: '09:00',
        endTime: '10:00',
        attendance: 28,
        lateness: 0,
        absence: 1,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '물리',
        startTime: '10:10',
        endTime: '11:10',
        attendance: 28,
        lateness: 0,
        absence: 1,
        maxProgress: 55
      },
      {
        period: 3,
        subject: '국어',
        startTime: '11:20',
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
        subject: '철학',
        startTime: '09:00',
        endTime: '10:00',
        attendance: 26,
        lateness: 2,
        absence: 2,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '미술',
        startTime: '10:10',
        endTime: '11:10',
        attendance: 26,
        lateness: 2,
        absence: 2,
        maxProgress: 35
      },
      {
        period: 3,
        subject: '한국사',
        startTime: '11:20',
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
        subject: '지구과학',
        startTime: '09:00',
        endTime: '10:00',
        attendance: 29,
        lateness: 0,
        absence: 1,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '경제',
        startTime: '10:10',
        endTime: '11:10',
        attendance: 29,
        lateness: 0,
        absence: 1,
        maxProgress: 75
      },
      {
        period: 3,
        subject: '한문',
        startTime: '11:20',
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
        subject: '문학',
        startTime: '09:00',
        endTime: '10:00',
        attendance: 30,
        lateness: 0,
        absence: 1,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '수학',
        startTime: '10:10',
        endTime: '11:10',
        attendance: 30,
        lateness: 0,
        absence: 1,
        maxProgress: 85
      },
      {
        period: 3,
        subject: '영어',
        startTime: '11:20',
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
        subject: '물리',
        startTime: '09:00',
        endTime: '10:00',
        attendance: 28,
        lateness: 1,
        absence: 1,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '화학',
        startTime: '10:10',
        endTime: '11:10',
        attendance: 28,
        lateness: 1,
        absence: 1,
        maxProgress: 60
      },
      {
        period: 3,
        subject: '생물',
        startTime: '11:20',
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
        subject: '기하',
        startTime: '09:00',
        endTime: '10:00',
        attendance: 29,
        lateness: 0,
        absence: 1,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '미적분',
        startTime: '10:10',
        endTime: '11:10',
        attendance: 29,
        lateness: 0,
        absence: 1,
        maxProgress: 78
      },
      {
        period: 3,
        subject: '확률과통계',
        startTime: '11:20',
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
        subject: '경제',
        startTime: '09:00',
        endTime: '10:00',
        attendance: 30,
        lateness: 0,
        absence: 1,
        maxProgress: 100
      },
      {
        period: 2,
        subject: '지리',
        startTime: '10:10',
        endTime: '11:10',
        attendance: 30,
        lateness: 0,
        absence: 1,
        maxProgress: 72
      },
      {
        period: 3,
        subject: '정보',
        startTime: '11:20',
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

// 현재 시간을 기준으로 시험 상태 판단
function getStatus(period, startTime, endTime) {
  const now = new Date();
  const [startHour, startMin] = startTime.split(':').map(Number);
  const [endHour, endMin] = endTime.split(':').map(Number);

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const startMinutes = startHour * 60 + startMin;
  const endMinutes = endHour * 60 + endMin;

  if (currentMinutes < startMinutes) {
    return { status: 'upcoming', label: '예정' };
  } else if (currentMinutes >= startMinutes && currentMinutes <= endMinutes) {
    return { status: 'proceeding', label: '진행중' };
  } else {
    return { status: 'completed', label: '완료' };
  }
}

function selectGrade(grade) {
  selectedGrade = grade;
  document.querySelectorAll('.grade-btn').forEach(btn => btn.classList.remove('active'));
  const button = document.querySelector(`.grade-btn[data-grade="${grade}"]`);
  if (button) button.classList.add('active');
  renderSchedule(selectedDay);
}

// 날짜 선택 이벤트
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

// 시험 일정 렌더링
function renderSchedule(day) {
  const schedule = examData[selectedGrade][day];
  const container = document.getElementById('scheduleContainer');
  container.innerHTML = '';

  schedule.forEach(exam => {
    const statusInfo = getStatus(exam.period, exam.startTime, exam.endTime);
    const statusBadgeClass = `status-${statusInfo.status}`;
    const progressPercent = exam.maxProgress;
    const progressClass = getProgressClass(progressPercent);

    const periodDiv = document.createElement('div');
    periodDiv.className = `exam-period ${progressClass}`;

    periodDiv.innerHTML = `
      <div class="period-header">
        <div class="period-number">${exam.period}교시</div>
        <div class="period-title-row">
          <div class="period-subject">${exam.subject}</div>
          <div class="period-meta">
            <span class="period-time">${exam.startTime} ~ ${exam.endTime}</span>
            <span class="progress-pill">${progressPercent}% 진행</span>
          </div>
        </div>
        <span class="status-badge ${statusBadgeClass}">${statusInfo.label}</span>
      </div>
      <div class="period-progress">
        <div class="progress-track">
          <div class="progress-fill ${progressClass}" style="width: ${progressPercent}%"></div>
        </div>
      </div>
    `;

    container.appendChild(periodDiv);
  });

  updateAttendance(day);
}

// 출석 현황 업데이트
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

// 시간 업데이트
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

// 초기화
window.addEventListener('DOMContentLoaded', function() {
  updateTime();
  setInterval(updateTime, 1000);
  renderSchedule(1);
  setupAttendanceCardEditing();
});
