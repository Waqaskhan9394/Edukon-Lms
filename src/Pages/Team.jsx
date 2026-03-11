import React from 'react'
import ViewHeroSection from '../Components/CourseView/ViewHero'
import TeamsInstructors from '../Components/Team/TeamInstructors'
import TeamAchievementSection from '../Components/Team/TeamAchieveGoul'

const Team = () => {
  return (
   <>
   <ViewHeroSection
      title="All Team Members" 
        homeText="Home" 
        homeLink="/" 
        currentPage="Team"/>
        <TeamsInstructors/>
        <TeamAchievementSection/>
   </>
  )
}

export default Team