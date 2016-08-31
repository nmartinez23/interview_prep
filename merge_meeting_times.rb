# You want to add a feature to see the times in a day when everyone in the office is available for a meeting.
# To do this, you’ll need to know when any team is having a meeting. 
# Each meeting time is stored as arrays of integers [start_time, end_time]. 
# These integers represent the number of 30-minute blocks past 9:00am.
# Write a function that takes a nested array of meeting time ranges and returns an array of condensed ranges.
# Do not assume the meetings are in order. The meeting times are coming from multiple teams.

def merge_ranges(meetings)
    
  # sort by start times
  sorted_meetings = meetings.sort
    
  # initalize merged meetings as a nested array with the earliest meeting
  merged_meetings = [sorted_meetings[0]]
    
  sorted_meetings[1..-1].each do |current_meeting_start, current_meeting_end|
    last_merged_meeting_start, last_merged_meeting_end = merged_meetings[-1]
        
    # if the current and last meetings overlap, use the latest end time
    if current_meeting_start <= last_merged_meeting_end
      merged_meetings[-1] = [last_merged_meeting_start, [last_merged_meeting_end, current_meeting_end].max]
            
    # else add the current meeting since it doesn't overlap
    else
      merged_meetings.push([current_meeting_start, current_meeting_end])
    end
  end
  return merged_meetings
end

# run your function through some test cases here
# remember: debugging is half the battle!
arr = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]  
print merge_ranges(arr)
# [[0, 1], [3, 8], [9, 12]] answer
