// Add a feature to see the times in a day when everyone in the office is available for a meeting.
// To do this, you’ll need to know when any team is having a meeting.
// Each meeting time is stored as arrays of integers [start_time, end_time].
// These integers represent the number of 30-minute blocks past 9:00am.
// Function takes a nested array of meeting time ranges and returns an array of condensed ranges.
// Do not assume the meetings are in order. The meeting times are coming from multiple teams.
// Complexity is O(n lg n) time and O(n) space. If input array is already sorted, O(n) time.

function mergeRanges (meetings) {
  // sort by start times
  var sortedMeetings = meetings.slice().sort(function (a, b) {
    return a.startTime > b.startTime ? 1 : - 1;
  });

  // initialize with the earliest meeting
  var mergedMeetings = [sortedMeetings[0]];

  for (var i = 1; i < sortedMeetings.length; i++) {
    var currentMeeting = sortedMeetings[i];

    // get the last index position in the mergedMeetings array
    var lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime,
                                           currentMeeting.endTime);
    // else add current meeting since it doesn't overlap
    } else {
      mergedMeetings.push(currentMeeting);
    }
  }
  return mergedMeetings;
};

var meetingTimes =   [
    {startTime: 1, endTime: 3},
    {startTime: 3, endTime: 5},
    {startTime: 2, endTime: 6},
    {startTime: 7, endTime: 9},
];

console.log(mergeRanges(meetingTimes));
