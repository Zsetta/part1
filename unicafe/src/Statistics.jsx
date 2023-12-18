import StatisticsLine from "./StatisticsLine"
const Statistics = ({good,neutral,bad,all}) => {
    if(all === 0){
        return(<div>
            No feedback given
        </div>)
    }
    return(
        <>
         <StatisticsLine counter={good} text='Good'/>
         <StatisticsLine counter={neutral} text='Neutral'/>
         <StatisticsLine counter={bad} text='Bad'/>
         <StatisticsLine counter={all} text='All'/>
         <StatisticsLine counter={(good-bad)/all} text='Average'/>
         <StatisticsLine counter={good*100/all+'%'} text='Positive'/>
        </>
    )
}
export default Statistics