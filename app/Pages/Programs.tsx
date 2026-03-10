'use client'

import EntrepreneurshipProgramInfo from './ggmp/EntrepreneurshipProgramInfo'
import FoundationInfo from './ggmp/FoundationInfo'
import ProgramInfo from './ggmp/PatentTrack'
// import ProgramCards from '../Section/Programs/ProgramCards'
import ResearchInfo from './ggmp/ResearchTrack'

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