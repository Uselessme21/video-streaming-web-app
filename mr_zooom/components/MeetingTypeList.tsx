"use client";

import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import { Router } from "lucide-react";
import MeetingModal from "./MeetingModal";


function MeetingTypeList() {
  const [meetingState, setmeetingState] = useState<
    "isScheduledMeet" | "isJoiningMeet" | "isInstantMeet" | undefined
  >();
  const createMeeting=()=>{}
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meetings"
        description="start instant meeting"
        handleClick={() => setmeetingState("isInstantMeet")}
        className="bg-orange-1"
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="Your Recordings"
        description="See Your Recordings"
        handleClick={() =>Router.push('/recordings')}
        className="bg-blue-1"
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule your Meetings"
        description="Plan Your Upcoming Meetings"
        handleClick={() => setmeetingState("isScheduledMeet")}
        className="bg-purple-1"
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="Join Your ongoing Meeting"
        handleClick={() => setmeetingState("isJoiningMeet")}
        className="bg-green-1"
      />
      <MeetingModal 
      isOpen={meetingState==='isInstantMeet'}
      onClose={()=>setmeetingState(undefined)}
      title="start an Instant Meet"
      className="text-center"
      buttonText="Start Meet"
      handleClick={createMeeting}
      />
    </section>
  );
}

export default MeetingTypeList;
