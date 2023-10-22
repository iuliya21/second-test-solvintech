type TProgramsProps = {
  children: React.ReactNode;
}

const Programs: React.FC<TProgramsProps> = ({ children }) =>  {
  return (
    <div className="flex gap-x-[40.5px]">
        <img src={require("../images/left.svg").default} alt="Стрелка" className="cursor-pointer"/>
        <div className="w-[940px] flex justify-between">
          {children}
        </div>
        <img src={require("../images/right.svg").default} alt="Стрелка" className="cursor-pointer"/>
      </div>
  )
}

export default Programs;