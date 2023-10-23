type TProgramsProps = {
  children: React.ReactNode;
}

const Programs: React.FC<TProgramsProps> = ({ children }) =>  {
  return (
    <div className="flex gap-x-[40.5px]">
        <img src={require("../images/left.svg").default} alt="Стрелка" className="cursor-pointer 
        max-xl:hidden"/>
        <div className="w-[940px] max-xl:w-full flex justify-center flex-wrap gap-[28px] ">
          {children}
        </div>
        <img src={require("../images/right.svg").default} alt="Стрелка" className="cursor-pointer
         max-xl:hidden"/>
      </div>
  )
}

export default Programs;