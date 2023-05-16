export const full_schedule = [{ beforeTime: '00:00:00', endTime: '23:59:59' }]; // ON
export const normal_schedule = [
  // NORMAL
  { beforeTime: '00:00:00', endTime: '03:05:03' },
  { beforeTime: '03:27:43', endTime: '08:03:23' },
  { beforeTime: '08:32:18', endTime: '13:11:45' },
  { beforeTime: '20:34:38', endTime: '23:59:59' },
];
export const no_schedule = []; // OFF
export const schedule = [full_schedule, normal_schedule, no_schedule];
export const rate = 0.1;
