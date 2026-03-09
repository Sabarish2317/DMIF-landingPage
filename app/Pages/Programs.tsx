'use client'

import EntrepreneurshipProgramInfo from './Programs/EntrepreneurshipProgramInfo'
import FoundationInfo from './Programs/FoundationInfo'
import ProgramInfo from './Programs/PatentTrack'
// import ProgramCards from '../Section/Programs/ProgramCards'
import ResearchInfo from './Programs/ResearchTrack'

const Programs = () => {
  return (
    <div>
      <FoundationInfo/>
      {/* <ProgramCards /> */}
      <ProgramInfo/>
      <ResearchInfo/>
      <EntrepreneurshipProgramInfo/>
      
    </div>
  )
}

export default Programs