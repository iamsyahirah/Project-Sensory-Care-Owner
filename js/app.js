/*
 * SensoryCare
 * Owner-only management dashboard
 *
 * Prototype data is stored in browser localStorage.
 * No parent or tutor authentication/role system is used.
 */

// Default Seed Data
        const INITIAL_STUDENTS = [
            {
                id: 'std_1',
                name: 'Adam Hakim',
                age: 7,
                gender: 'Male',
                parent: 'Puan Aina',
                phone: '012-3456789',
                address: 'No. 12, Jalan Setia Indah U13/11, Setia Alam',
                area: 'Setia Alam',
                package: '8 Sessions / Month',
                preferredTime: 'Wednesday, 10:00 AM',
                status: 'Active',
                notes: 'Assessment completed in Aug 2026. Responds well to weighted lap pads.',
                parentConcerns: 'Sensory seeking (tactile & movement). Needs fine motor support.',
                nextSessionDate: '2026-09-25'
            },
            {
                id: 'std_2',
                name: 'Sara',
                age: 5,
                gender: 'Female',
                parent: 'Encik Farhan',
                phone: '019-8877665',
                address: 'No. 45, Jalan Platinum 7/12, Section 7',
                area: 'Shah Alam',
                package: '4 Sessions / Month',
                preferredTime: 'Friday, 11:00 AM',
                status: 'Active',
                notes: 'Sensitive to loud noise and textured foods.',
                parentConcerns: 'Speech delay & auditory sensitivity during messy play.',
                nextSessionDate: '2026-09-25'
            },
            {
                id: 'std_3',
                name: 'Aiman',
                age: 6,
                gender: 'Male',
                parent: 'Puan Maya',
                phone: '013-1122334',
                address: 'No. 8, USJ 4/2A',
                area: 'Subang Jaya',
                package: '8 Sessions / Month',
                preferredTime: 'Friday, 03:00 PM',
                status: 'Active',
                notes: 'Working on core strength and balance board routines.',
                parentConcerns: 'Hyperactivity, difficulty staying seated during tabletop activities.',
                nextSessionDate: '2026-09-25'
            },
            {
                id: 'std_4',
                name: 'Hana',
                age: 4,
                gender: 'Female',
                parent: 'Puan Nora',
                phone: '017-9988112',
                address: 'Jalan Anggerik Vanilla 31/100',
                area: 'Kota Kemuning',
                package: '8 Sessions / Month',
                preferredTime: 'Monday, 10:00 AM',
                status: 'Active',
                notes: 'Enjoys finger painting and water play sensory bins.',
                parentConcerns: 'Fine motor coordination & bilateral integration.',
                nextSessionDate: '2026-09-28'
            },
            {
                id: 'std_5',
                name: 'Danish',
                age: 8,
                gender: 'Male',
                parent: 'Encik Razak',
                phone: '011-5544332',
                address: 'Bandar Utama BU 10/4',
                area: 'Petaling Jaya',
                package: '4 Sessions / Month',
                preferredTime: 'Thursday, 02:00 PM',
                status: 'Active',
                notes: 'Focusing on handwriting grip and upper body stability.',
                parentConcerns: 'Pencil grip endurance and posture.',
                nextSessionDate: '2026-09-29'
            },
            {
                id: 'std_6',
                name: 'Iman',
                age: 6,
                gender: 'Male',
                parent: 'Puan Salwa',
                phone: '016-3322110',
                address: 'Bukit Jelutong, Shah Alam',
                area: 'Bukit Jelutong',
                package: '8 Sessions / Month',
                preferredTime: 'Tuesday, 04:00 PM',
                status: 'Active',
                notes: 'Tactile defensiveness gradually improving.',
                parentConcerns: 'Avoids sticky surfaces and sand.',
                nextSessionDate: '2026-09-29'
            },
            {
                id: 'std_7',
                name: 'Arissa',
                age: 5,
                gender: 'Female',
                parent: 'Puan Zulaikha',
                phone: '012-7766554',
                address: 'Puchong Utama PU 3',
                area: 'Puchong',
                package: 'Single Session',
                preferredTime: 'Saturday, 09:00 AM',
                status: 'Inactive',
                notes: 'Completed short 4-week program.',
                parentConcerns: 'General sensory development consultation.',
                nextSessionDate: '-'
            },
            {
                id: 'std_8',
                name: 'Rayyan',
                age: 7,
                gender: 'Male',
                parent: 'Encik Kamal',
                phone: '018-2233445',
                address: 'Denai Alam U16',
                area: 'Shah Alam',
                package: '8 Sessions / Month',
                preferredTime: 'Thursday, 10:00 AM',
                status: 'Active',
                notes: 'Proprioceptive input exercises (heavy work activities).',
                parentConcerns: 'Bouncing and bumping into furniture at home.',
                nextSessionDate: '2026-09-26'
            }
        ];

        const INITIAL_SESSIONS = [
            {
                id: 'ses_1',
                studentId: 'std_1',
                studentName: 'Adam Hakim',
                type: 'Sensory Session',
                date: '2026-09-25',
                time: '09:00 AM',
                duration: 60,
                location: 'Setia Alam',
                status: 'Completed',
                activities: ['Sensory Play', 'Fine Motor', 'Balance'],
                observation: 'Adam completed 15 minutes of rice bin search, followed by 10 minutes balance beam walking. Showed high enthusiasm.',
                response: 'Calm, focused, accepted tactile stimuli with minimal resistance.',
                parentFeedback: 'Puan Aina noted Adam was calmer during dinner time yesterday.',
                nextFocus: 'Introduce playdough resistance exercises for hand strength.'
            },
            {
                id: 'ses_2',
                studentId: 'std_2',
                studentName: 'Sara',
                type: 'Sensory Play',
                date: '2026-09-25',
                time: '11:00 AM',
                duration: 60,
                location: 'Shah Alam',
                status: 'Scheduled',
                activities: [],
                observation: '',
                response: '',
                parentFeedback: '',
                nextFocus: ''
            },
            {
                id: 'ses_3',
                studentId: 'std_3',
                studentName: 'Aiman',
                type: 'Fine Motor Activity',
                date: '2026-09-25',
                time: '03:00 PM',
                duration: 60,
                location: 'Subang Jaya',
                status: 'Scheduled',
                activities: [],
                observation: '',
                response: '',
                parentFeedback: '',
                nextFocus: ''
            },
            {
                id: 'ses_4',
                studentId: 'std_8',
                studentName: 'Rayyan',
                type: 'Gross Motor & Balance',
                date: '2026-09-26',
                time: '10:00 AM',
                duration: 60,
                location: 'Shah Alam',
                status: 'Scheduled',
                activities: [],
                observation: '',
                response: '',
                parentFeedback: '',
                nextFocus: ''
            },
            {
                id: 'ses_5',
                studentId: 'std_4',
                studentName: 'Hana',
                type: 'Sensory Session',
                date: '2026-09-23',
                time: '10:00 AM',
                duration: 60,
                location: 'Kota Kemuning',
                status: 'Completed',
                activities: ['Tactile', 'Visual', 'Coordination'],
                observation: 'Hana practiced stringing beads and obstacle course navigation.',
                response: 'Good eye-hand coordination demonstrated.',
                parentFeedback: 'Parent happy with progress.',
                nextFocus: 'Water play and cup stacking.'
            }
        ];

        const INITIAL_PAYMENTS = [
            {
                id: 'pay_1',
                studentId: 'std_1',
                studentName: 'Adam Hakim',
                package: '8 Sessions',
                amount: 800,
                date: '2026-09-01',
                status: 'Paid',
                method: 'Bank Transfer',
                notes: 'Full September payment'
            },
            {
                id: 'pay_2',
                studentId: 'std_2',
                studentName: 'Sara',
                package: '4 Sessions',
                amount: 400,
                date: '2026-09-05',
                status: 'Paid',
                method: 'DuitNow',
                notes: 'Monthly fee'
            },
            {
                id: 'pay_3',
                studentId: 'std_3',
                studentName: 'Aiman',
                package: '8 Sessions',
                amount: 450,
                date: '-',
                status: 'Outstanding',
                method: '-',
                notes: 'Pending parent transfer'
            },
            {
                id: 'pay_4',
                studentId: 'std_8',
                studentName: 'Rayyan',
                package: '4 Sessions',
                amount: 400,
                date: '2026-09-02',
                status: 'Paid',
                method: 'Bank Transfer',
                notes: 'Paid via online banking'
            }
        ];

        const SENSORY_ACTIVITIES = [
            'Sensory Play', 'Fine Motor', 'Gross Motor',
            'Balance', 'Tactile', 'Proprioceptive',
            'Visual', 'Movement', 'Coordination'
        ];

        let appData = {
            students: [],
            sessions: [],
            payments: []
        };

        let currentActiveTab = 'dashboard';
        let currentStudentProfileId = null;
        let currentActiveSessionId = null;
        let currentStudentFilter = 'all';
        let currentPaymentFilter = 'all';

        // Initialize state on page load
        window.onload = function() {
            loadState();
            setupMobileMenu();
            renderAllViews();
            lucide.createIcons();
        };

        function loadState() {
            const saved = localStorage.getItem('sensorycare_data');
            if (saved) {
                try {
                    appData = JSON.parse(saved);
                } catch(e) {
                    initDefaultData();
                }
            } else {
                initDefaultData();
            }
        }

        function initDefaultData() {
            appData.students = INITIAL_STUDENTS;
            appData.sessions = INITIAL_SESSIONS;
            appData.payments = INITIAL_PAYMENTS;
            saveState();
        }

        function saveState() {
            localStorage.setItem('sensorycare_data', JSON.stringify(appData));
        }

        function switchTab(tabName) {
            currentActiveTab = tabName;

            // Hide all views
            const views = ['dashboard', 'students', 'student-profile', 'calendar', 'session-detail', 'session-record', 'payments', 'reports', 'settings'];
            views.forEach(v => {
                const el = document.getElementById('view-' + v);
                if (el) el.classList.add('hidden');
            });

            // Show selected view
            const activeEl = document.getElementById('view-' + tabName);
            if (activeEl) activeEl.classList.remove('hidden');

            // Highlight nav buttons
            ['dashboard', 'students', 'calendar', 'payments', 'reports', 'settings'].forEach(n => {
                const btn = document.getElementById('nav-' + n);
                if (btn) {
                    if (n === tabName) {
                        btn.classList.add('active-nav');
                    } else {
                        btn.classList.remove('active-nav');
                    }
                }
            });

            // Refresh dynamic view contents
            if (tabName === 'dashboard') renderDashboard();
            if (tabName === 'students') renderStudents();
            if (tabName === 'calendar') renderCalendar();
            if (tabName === 'payments') renderPayments();

            // Close mobile menu if open
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.add('-translate-x-full');

            lucide.createIcons();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function setupMobileMenu() {
            const menuBtn = document.getElementById('mobile-menu-btn');
            const closeBtn = document.getElementById('close-sidebar-btn');
            const sidebar = document.getElementById('sidebar');

            menuBtn.addEventListener('click', () => {
                sidebar.classList.remove('-translate-x-full');
            });

            closeBtn.addEventListener('click', () => {
                sidebar.classList.add('-translate-x-full');
            });
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            const toastMsg = document.getElementById('toast-message');
            toastMsg.innerText = msg;
            toast.classList.remove('translate-y-[-150%]', 'opacity-0', 'pointer-events-none');
            setTimeout(() => {
                toast.classList.add('translate-y-[-150%]', 'opacity-0', 'pointer-events-none');
            }, 3000);
        }

        // Modal Helpers
        function openModal(id) {
            const modal = document.getElementById(id);
            if (modal) {
                modal.classList.remove('opacity-0', 'pointer-events-none');
            }
            populateDropdowns();
            lucide.createIcons();
        }

        function closeModal(id) {
            const modal = document.getElementById(id);
            if (modal) {
                modal.classList.add('opacity-0', 'pointer-events-none');
            }
        }

        function populateDropdowns() {
            const schSelect = document.getElementById('sch-student-id');
            const paySelect = document.getElementById('pay-student-id');
            if (!schSelect || !paySelect) return;

            const activeStudents = appData.students.filter(s => s.status === 'Active');

            schSelect.innerHTML = activeStudents.map(s => `<option value="${s.id}">${s.name} (${s.area})</option>`).join('');
            paySelect.innerHTML = appData.students.map(s => `<option value="${s.id}">${s.name} - ${s.package}</option>`).join('');
        }

        function renderDashboard() {
            // Stats
            const activeStudents = appData.students.filter(s => s.status === 'Active').length;
            const todayDate = '2026-09-25'; // Fixed mock current date for prototype stability
            const todaySessions = appData.sessions.filter(s => s.date === todayDate);
            const completedToday = todaySessions.filter(s => s.status === 'Completed').length;

            const outstandingPayments = appData.payments.filter(p => p.status === 'Outstanding');
            const outstandingSum = outstandingPayments.reduce((sum, p) => sum + Number(p.amount), 0);

            document.getElementById('stat-active-students').innerText = activeStudents;
            document.getElementById('stat-today-sessions').innerText = todaySessions.length;
            document.getElementById('stat-completed-today').innerText = completedToday;
            document.getElementById('stat-outstanding').innerText = `RM${outstandingSum}`;
            document.getElementById('badge-students-count').innerText = activeStudents;

            // Render Today's Sessions
            const todayContainer = document.getElementById('today-sessions-list');
            if (todaySessions.length === 0) {
                todayContainer.innerHTML = `
                    <div class="text-center py-8 text-slate-400 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                        <i data-lucide="calendar-off" class="w-8 h-8 mx-auto mb-2 opacity-50"></i>
                        <p class="text-sm font-medium">No sessions scheduled for today.</p>
                        <button onclick="openScheduleModal()" class="mt-3 text-xs bg-teal-600 text-white px-3 py-1.5 rounded-lg font-semibold">Schedule Session</button>
                    </div>`;
            } else {
                todayContainer.innerHTML = todaySessions.map(s => {
                    const statusBadge = s.status === 'Completed' 
                        ? '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">Completed</span>'
                        : '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">Upcoming</span>';

                    return `
                        <div class="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div class="flex items-center gap-3.5">
                                <div class="p-3 bg-white border border-slate-200 rounded-xl text-slate-800 font-bold text-xs text-center min-w-[70px]">
                                    ${s.time}
                                </div>
                                <div>
                                    <h4 class="font-bold text-slate-900 text-base">${s.studentName}</h4>
                                    <p class="text-xs text-slate-500 font-medium">${s.type} • <span class="text-slate-700">${s.location}</span></p>
                                </div>
                            </div>
                            <div class="flex items-center gap-2 self-end sm:self-center">
                                ${statusBadge}
                                <button onclick="viewSessionDetail('${s.id}')" class="px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold rounded-lg text-xs">
                                    ${s.status === 'Completed' ? 'View Record' : 'Start / Record'}
                                </button>
                            </div>
                        </div>`;
                }).join('');
            }

            // Payment Reminders
            const reminderContainer = document.getElementById('dashboard-payment-reminders');
            if (outstandingPayments.length === 0) {
                reminderContainer.innerHTML = `<p class="text-xs text-slate-400 italic">No outstanding payments!</p>`;
            } else {
                reminderContainer.innerHTML = outstandingPayments.map(p => `
                    <div class="pt-3 flex items-center justify-between text-xs">
                        <div>
                            <p class="font-bold text-slate-900">${p.studentName}</p>
                            <p class="text-slate-400 font-medium">${p.package}</p>
                        </div>
                        <span class="font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-lg">RM${p.amount}</span>
                    </div>
                `).join('');
            }

            // Upcoming Sessions
            const upcoming = appData.sessions.filter(s => s.status === 'Scheduled' && s.date >= '2026-09-26');
            const upcomingContainer = document.getElementById('dashboard-upcoming-sessions');
            if (upcoming.length === 0) {
                upcomingContainer.innerHTML = `<div class="col-span-3 text-xs text-slate-400 italic">No upcoming sessions.</div>`;
            } else {
                upcomingContainer.innerHTML = upcoming.slice(0, 3).map(s => `
                    <div class="p-4 rounded-xl border border-slate-200/80 bg-slate-50 space-y-2">
                        <div class="flex justify-between items-start">
                            <span class="text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">${s.date}</span>
                            <span class="text-xs font-semibold text-slate-500">${s.time}</span>
                        </div>
                        <h4 class="font-bold text-slate-900 text-sm">${s.studentName}</h4>
                        <p class="text-xs text-slate-500">${s.type} • ${s.location}</p>
                    </div>
                `).join('');
            }
        }

        function renderStudents() {
            const grid = document.getElementById('students-grid');
            let filtered = appData.students;

            if (currentStudentFilter !== 'all') {
                filtered = filtered.filter(s => s.status === currentStudentFilter);
            }

            const searchVal = document.getElementById('students-search-input')?.value.toLowerCase() || '';
            if (searchVal) {
                filtered = filtered.filter(s => 
                    s.name.toLowerCase().includes(searchVal) ||
                    s.area.toLowerCase().includes(searchVal) ||
                    s.parent.toLowerCase().includes(searchVal)
                );
            }

            document.getElementById('students-active-count').innerText = appData.students.filter(s => s.status === 'Active').length;

            if (filtered.length === 0) {
                grid.innerHTML = `
                    <div class="col-span-full py-12 text-center text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200">
                        <i data-lucide="users" class="w-10 h-10 mx-auto mb-2 opacity-40"></i>
                        <p class="font-medium text-sm">No students match your criteria.</p>
                    </div>`;
                lucide.createIcons();
                return;
            }

            grid.innerHTML = filtered.map(s => `
                <div onclick="openStudentProfile('${s.id}')" class="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all cursor-pointer flex flex-col justify-between">
                    <div>
                        <div class="flex items-start justify-between gap-2 mb-3">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 font-bold text-sm flex items-center justify-center border border-teal-100">
                                    ${s.name.split(' ').map(n=>n[0]).join('').substring(0,2)}
                                </div>
                                <div>
                                    <h3 class="font-bold text-slate-900 text-base leading-snug">${s.name}</h3>
                                    <p class="text-xs text-slate-500">${s.age} years old • ${s.gender}</p>
                                </div>
                            </div>
                            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${s.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}">
                                ${s.status}
                            </span>
                        </div>

                        <div class="space-y-1.5 text-xs text-slate-600 my-3 bg-slate-50 p-3 rounded-xl">
                            <p class="flex items-center gap-2"><i data-lucide="user" class="w-3.5 h-3.5 text-slate-400"></i> Parent: <strong class="text-slate-800">${s.parent}</strong></p>
                            <p class="flex items-center gap-2"><i data-lucide="phone" class="w-3.5 h-3.5 text-slate-400"></i> ${s.phone}</p>
                            <p class="flex items-center gap-2"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-slate-400"></i> ${s.area}</p>
                        </div>
                    </div>

                    <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span class="text-slate-500 font-medium">${s.package}</span>
                        <span class="text-teal-700 font-semibold flex items-center gap-1">
                            Profile <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                        </span>
                    </div>
                </div>
            `).join('');

            lucide.createIcons();
        }

        function filterStudents() {
            renderStudents();
        }

        function setStudentFilter(status) {
            currentStudentFilter = status;
            ['all', 'active', 'inactive'].forEach(st => {
                const btn = document.getElementById('filter-btn-' + st);
                if (btn) {
                    if (st === status.toLowerCase()) {
                        btn.className = "px-4 py-1.5 rounded-xl text-xs font-semibold bg-teal-600 text-white shadow-sm transition-all";
                    } else {
                        btn.className = "px-4 py-1.5 rounded-xl text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all";
                    }
                }
            });
            renderStudents();
        }

        function openStudentProfile(studentId) {
            currentStudentProfileId = studentId;
            const student = appData.students.find(s => s.id === studentId);
            if (!student) return;

            document.getElementById('profile-name').innerText = student.name;
            document.getElementById('profile-avatar').innerText = student.name.split(' ').map(n=>n[0]).join('').substring(0,2);
            document.getElementById('profile-meta').innerText = `${student.age} years old • ${student.gender}`;
            document.getElementById('profile-parent').innerText = student.parent;
            document.getElementById('profile-phone').innerText = student.phone;
            document.getElementById('profile-location').innerText = student.area;
            document.getElementById('profile-address').innerText = student.address;
            document.getElementById('profile-area').innerText = student.area;
            document.getElementById('profile-preferred').innerText = student.preferredTime || 'Flexible';
            document.getElementById('profile-package-type').innerText = student.package;
            document.getElementById('profile-concerns-text').innerText = student.parentConcerns || 'No special concerns stated.';
            document.getElementById('profile-initial-notes').innerText = student.notes || 'No initial notes.';

            // Next session info
            const nextSes = appData.sessions.find(s => s.studentId === studentId && s.status === 'Scheduled');
            if (nextSes) {
                document.getElementById('profile-next-session-date').innerText = nextSes.date;
                document.getElementById('profile-next-session-time').innerText = `${nextSes.time} (${nextSes.duration} mins)`;
            } else {
                document.getElementById('profile-next-session-date').innerText = 'None scheduled';
                document.getElementById('profile-next-session-time').innerText = '-';
            }

            // Payment summary
            const pay = appData.payments.find(p => p.studentId === studentId);
            document.getElementById('profile-pay-package').innerText = student.package;
            document.getElementById('profile-pay-total').innerText = pay ? `RM${pay.amount}` : 'RM800';

            const pastSessions = appData.sessions.filter(s => s.studentId === studentId && s.status === 'Completed').length;
            document.getElementById('profile-pay-completed').innerText = `${pastSessions} / 8`;

            // Render past sessions history tab
            const historyList = appData.sessions.filter(s => s.studentId === studentId);
            const historyContainer = document.getElementById('profile-sessions-list');
            if (historyList.length === 0) {
                historyContainer.innerHTML = `<p class="text-xs text-slate-400 italic">No session history recorded yet.</p>`;
            } else {
                historyContainer.innerHTML = historyList.map(s => `
                    <div class="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                        <div class="flex items-center justify-between border-b border-slate-100 pb-2">
                            <span class="text-xs font-bold text-teal-700">${s.date} @ ${s.time}</span>
                            <span class="text-xs font-semibold px-2 py-0.5 rounded-full ${s.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'}">${s.status}</span>
                        </div>
                        <p class="text-sm font-bold text-slate-900">${s.type}</p>
                        ${s.activities.length ? `<div class="flex flex-wrap gap-1">${s.activities.map(a=>`<span class="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">${a}</span>`).join('')}</div>` : ''}
                        ${s.observation ? `<p class="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100"><strong>Note:</strong> ${s.observation}</p>` : ''}
                    </div>
                `).join('');
            }

            switchTab('student-profile');
            switchProfileTab('overview');
        }

        function switchProfileTab(tab) {
            ['overview', 'sessions', 'notes', 'payment'].forEach(t => {
                const content = document.getElementById('ptab-content-' + t);
                const btn = document.getElementById('ptab-btn-' + t);
                if (t === tab) {
                    content.classList.remove('hidden');
                    btn.className = "pb-3 border-b-2 border-teal-600 text-teal-600 font-semibold";
                } else {
                    content.classList.add('hidden');
                    btn.className = "pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-800";
                }
            });
        }

        function scheduleForCurrentStudent() {
            openScheduleModal();
            if (currentStudentProfileId) {
                document.getElementById('sch-student-id').value = currentStudentProfileId;
            }
        }

        function paymentForCurrentStudent() {
            openRecordPaymentModal();
            if (currentStudentProfileId) {
                document.getElementById('pay-student-id').value = currentStudentProfileId;
            }
        }

        function renderCalendar() {
            const daysGrid = document.getElementById('calendar-days-grid');
            let html = '';

            // September 2026 starts on Tuesday (offset = 2)
            for (let i = 0; i < 2; i++) {
                html += `<div class="bg-slate-50/50 rounded-xl h-24 p-2 text-slate-300 text-xs"></div>`;
            }

            for (let day = 1; day <= 30; day++) {
                const dayStr = `2026-09-${day < 10 ? '0' + day : day}`;
                const daySessions = appData.sessions.filter(s => s.date === dayStr);

                const isToday = day === 25;

                html += `
                    <div class="bg-white rounded-xl border ${isToday ? 'border-teal-500 ring-2 ring-teal-100' : 'border-slate-200/80'} h-24 p-2 flex flex-col justify-between hover:bg-slate-50/50 transition-all">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold ${isToday ? 'text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded-md' : 'text-slate-700'}">${day}</span>
                            ${daySessions.length ? `<span class="w-2 h-2 rounded-full bg-teal-500"></span>` : ''}
                        </div>
                        <div class="space-y-1 overflow-y-auto custom-scrollbar">
                            ${daySessions.map(s => `
                                <div onclick="viewSessionDetail('${s.id}')" class="text-[10px] p-1 rounded bg-teal-50 text-teal-900 border border-teal-100 truncate cursor-pointer hover:bg-teal-100 font-semibold">
                                    ${s.time.split(' ')[0]} ${s.studentName.split(' ')[0]}
                                </div>
                            `).join('')}
                        </div>
                    </div>`;
            }

            daysGrid.innerHTML = html;
        }

        function openScheduleModal() {
            openModal('modal-schedule-session');
        }

        function openRecordPaymentModal() {
            openModal('modal-record-payment');
        }

        function handleAddStudent(e) {
            e.preventDefault();
            const newId = 'std_' + (Date.now());
            const newStudent = {
                id: newId,
                name: document.getElementById('add-student-name').value,
                age: Number(document.getElementById('add-student-age').value),
                gender: document.getElementById('add-student-gender').value,
                parent: document.getElementById('add-student-parent').value,
                phone: document.getElementById('add-student-phone').value,
                address: document.getElementById('add-student-address').value,
                area: document.getElementById('add-student-area').value,
                package: document.getElementById('add-student-package').value,
                preferredTime: document.getElementById('add-student-preferred').value || 'Flexible',
                status: 'Active',
                notes: 'New student added.',
                parentConcerns: document.getElementById('add-student-concerns').value || 'None',
                nextSessionDate: '-'
            };

            appData.students.unshift(newStudent);
            saveState();
            closeModal('modal-add-student');
            document.getElementById('form-add-student').reset();
            showToast('New student saved successfully!');
            switchTab('students');
        }

        function handleScheduleSession(e) {
            e.preventDefault();
            const studentId = document.getElementById('sch-student-id').value;
            const student = appData.students.find(s => s.id === studentId);

            const newSession = {
                id: 'ses_' + Date.now(),
                studentId: studentId,
                studentName: student ? student.name : 'Student',
                type: document.getElementById('sch-type').value,
                date: document.getElementById('sch-date').value,
                time: document.getElementById('sch-time').value,
                duration: 60,
                location: student ? student.area : 'Home Visit',
                status: 'Scheduled',
                activities: [],
                observation: document.getElementById('sch-notes').value || '',
                response: '',
                parentFeedback: '',
                nextFocus: ''
            };

            appData.sessions.push(newSession);
            saveState();
            closeModal('modal-schedule-session');
            showToast('Home visit session scheduled successfully!');
            switchTab('dashboard');
        }

        function handleRecordPayment(e) {
            e.preventDefault();
            const studentId = document.getElementById('pay-student-id').value;
            const student = appData.students.find(s => s.id === studentId);

            const newPayment = {
                id: 'pay_' + Date.now(),
                studentId: studentId,
                studentName: student ? student.name : 'Student',
                package: student ? student.package : 'Package',
                amount: Number(document.getElementById('pay-amount').value),
                date: document.getElementById('pay-date').value,
                status: 'Paid',
                method: document.getElementById('pay-method').value,
                notes: document.getElementById('pay-notes').value || 'Fee payment'
            };

            // Update existing outstanding payment if exists
            const existingOut = appData.payments.find(p => p.studentId === studentId && p.status === 'Outstanding');
            if (existingOut) {
                existingOut.status = 'Paid';
                existingOut.amount = newPayment.amount;
                existingOut.date = newPayment.date;
                existingOut.method = newPayment.method;
            } else {
                appData.payments.unshift(newPayment);
            }

            saveState();
            closeModal('modal-record-payment');
            showToast('Payment recorded successfully!');
            switchTab('payments');
        }

        function viewSessionDetail(sessionId) {
            currentActiveSessionId = sessionId;
            const session = appData.sessions.find(s => s.id === sessionId);
            if (!session) return;

            document.getElementById('session-detail-student').innerText = session.studentName;
            document.getElementById('session-detail-type').innerText = session.type;
            document.getElementById('session-detail-date').innerText = session.date;
            document.getElementById('session-detail-time').innerText = `${session.time} (${session.duration} mins)`;
            document.getElementById('session-detail-location').innerText = `Home Visit - ${session.location}`;
            document.getElementById('session-detail-notes').innerText = session.observation || 'No special notes.';

            const badge = document.getElementById('session-detail-status-badge');
            const actionBtn = document.getElementById('session-action-btn');
            const tracker = document.getElementById('session-time-tracker');

            if (session.status === 'Completed') {
                badge.className = "px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 inline-block mb-2";
                badge.innerText = "Completed";
                tracker.innerText = "Session completed & documented.";
                actionBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i> View Session Record`;
            } else if (session.status === 'In Progress') {
                badge.className = "px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 inline-block mb-2";
                badge.innerText = "Session Started at 10:02 AM";
                tracker.innerText = "Visit in progress... Complete visit to write session notes.";
                actionBtn.innerHTML = `<i data-lucide="file-text" class="w-4 h-4"></i> Complete Session & Record`;
            } else {
                badge.className = "px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 inline-block mb-2";
                badge.innerText = "Upcoming Scheduled";
                tracker.innerText = "Ready to start home session visit.";
                actionBtn.innerHTML = `<i data-lucide="play" class="w-4 h-4 fill-current"></i> Start Session`;
            }

            switchTab('session-detail');
            lucide.createIcons();
        }

        function toggleStartSession() {
            const session = appData.sessions.find(s => s.id === currentActiveSessionId);
            if (!session) return;

            if (session.status === 'Scheduled') {
                session.status = 'In Progress';
                saveState();
                showToast('Session Started at 10:02 AM');
                viewSessionDetail(currentActiveSessionId);
            } else {
                openSessionRecordForm(session.id);
            }
        }

        function openSessionRecordForm(sessionId) {
            const session = appData.sessions.find(s => s.id === sessionId);
            if (!session) return;

            document.getElementById('rec-student-name').innerText = session.studentName;
            document.getElementById('rec-session-date').innerText = session.date;
            document.getElementById('rec-session-duration').innerText = `${session.duration} minutes`;

            // Populate Sensory Activity Chips
            const chipsContainer = document.getElementById('activities-chips-container');
            chipsContainer.innerHTML = SENSORY_ACTIVITIES.map((act, idx) => `
                <label class="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 hover:bg-teal-50 hover:border-teal-200 cursor-pointer text-xs font-medium transition-all">
                    <input type="checkbox" name="activity_chip" value="${act}" ${session.activities.includes(act) ? 'checked' : ''} class="w-4 h-4 text-teal-600 rounded focus:ring-teal-500">
                    <span>${act}</span>
                </label>
            `).join('');

            document.getElementById('rec-observation').value = session.observation || '';
            document.getElementById('rec-response').value = session.response || '';
            document.getElementById('rec-parent-feedback').value = session.parentFeedback || '';
            document.getElementById('rec-next-focus').value = session.nextFocus || '';

            switchTab('session-record');
        }

        function saveSessionRecord(e) {
            e.preventDefault();
            const session = appData.sessions.find(s => s.id === currentActiveSessionId);
            if (!session) return;

            const selectedChips = Array.from(document.querySelectorAll('input[name="activity_chip"]:checked')).map(cb => cb.value);

            session.status = 'Completed';
            session.activities = selectedChips;
            session.observation = document.getElementById('rec-observation').value;
            session.response = document.getElementById('rec-response').value;
            session.parentFeedback = document.getElementById('rec-parent-feedback').value;
            session.nextFocus = document.getElementById('rec-next-focus').value;

            saveState();
            showToast('Session record saved successfully.');
            switchTab('dashboard');
        }

        function renderPayments() {
            const tbody = document.getElementById('payments-table-body');
            let filtered = appData.payments;

            if (currentPaymentFilter !== 'all') {
                filtered = filtered.filter(p => p.status === currentPaymentFilter);
            }

            const searchVal = document.getElementById('payments-search-input')?.value.toLowerCase() || '';
            if (searchVal) {
                filtered = filtered.filter(p => p.studentName.toLowerCase().includes(searchVal));
            }

            const totalCollected = appData.payments.filter(p=>p.status === 'Paid').reduce((sum, p)=>sum + Number(p.amount), 0);
            const outstanding = appData.payments.filter(p=>p.status === 'Outstanding').reduce((sum, p)=>sum + Number(p.amount), 0);

            document.getElementById('payments-total-collected').innerText = `RM${totalCollected.toLocaleString()}`;
            document.getElementById('payments-outstanding').innerText = `RM${outstanding.toLocaleString()}`;

            if (filtered.length === 0) {
                tbody.innerHTML = `<tr><td colspan="7" class="p-8 text-center text-slate-400">No payment records found.</td></tr>`;
                return;
            }

            tbody.innerHTML = filtered.map(p => `
                <tr class="hover:bg-slate-50/80 transition-colors">
                    <td class="p-4 font-bold text-slate-900">${p.studentName}</td>
                    <td class="p-4 text-slate-600">${p.package}</td>
                    <td class="p-4 font-bold text-slate-900">RM${p.amount}</td>
                    <td class="p-4 text-slate-500 text-xs">${p.date}</td>
                    <td class="p-4 text-slate-600 text-xs">${p.method}</td>
                    <td class="p-4">
                        <span class="px-2.5 py-1 rounded-full text-xs font-bold ${p.status === 'Paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                            ${p.status}
                        </span>
                    </td>
                    <td class="p-4 text-right">
                        ${p.status === 'Outstanding' ? `
                            <button onclick="markAsPaid('${p.id}')" class="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-sm">
                                Mark Paid
                            </button>
                        ` : `<span class="text-xs text-slate-400">Recorded</span>`}
                    </td>
                </tr>
            `).join('');
        }

        function markAsPaid(paymentId) {
            const pay = appData.payments.find(p => p.id === paymentId);
            if (pay) {
                pay.status = 'Paid';
                pay.date = '2026-09-18';
                pay.method = 'Bank Transfer';
                saveState();
                showToast('Payment marked as paid.');
                renderPayments();
            }
        }

        function filterPayments() {
            renderPayments();
        }

        function setPaymentFilter(status) {
            currentPaymentFilter = status;
            ['all', 'paid', 'outstanding'].forEach(st => {
                const btn = document.getElementById('pay-filter-btn-' + st);
                if (btn) {
                    if (st === status.toLowerCase()) {
                        btn.className = "px-4 py-1.5 rounded-xl text-xs font-semibold bg-teal-600 text-white shadow-sm transition-all";
                    } else {
                        btn.className = "px-4 py-1.5 rounded-xl text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all";
                    }
                }
            });
            renderPayments();
        }

        function renderAllViews() {
            renderDashboard();
            renderStudents();
            renderCalendar();
            renderPayments();
        }
