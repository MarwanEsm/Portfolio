import Container from './components/Container/Container'
import PersonalInformation from './components/PersonalInformation/PersonalInformation'
import Experiences from './components/Experiences/Experiences'

const INTRO = `I'm Tarek Glauser, a thirty-five-years-old business developer from Bern, Switzerland`
const HEADLINE = <>Driving Growth and Innovation<br />A Business Developer s Strategic Vision <br/> for Success</> 
const EXPERIENCE = [
    {
        date: '2023',
        position: 'Business Devloper',
        details: {
            period:'June-2022 till now',
            company: 'Fixposition',
            location: 'Zürich - CH',
            responsibilities: [
                'Conducted market research utilizing various social media channels and analysis to identify potential business opportunities and new target markets,resulting in a 15% increase in leads and conversions, and enhance company presence in new territories',
                'Evaluate the requirements of corporate clients and propose a solution,factoring in the return on investment (ROI)',
                'Prepared meticulous internal and external reports and presentations to effectively communicate findings and recommendations.',
                'Assisted in developing and implementing strategic sales plans, including networking, and attending industry events, contributing to a 10% growth inclient base within three months.',
                'Collaborated with cross-functional teams to create and deliver compelling sales presentations and proposals, resulting in a 20% increase in client acquisition, and reaching wider target group.',
                'Utilized CRM software to track leads, manage customer relationships, and generate weekly performance reports, improving team efficiency and streamlining business development processes.',
            ]
        }


    },
    {
        date: '2022',
        position: 'Business & Sales',
        details: {
            period:'September-2022 till May-2023',
            company: 'Decathlon',
            location: 'Bern - CH',
            responsibilities: [
                'Provided expert sales advice to customers, ensuring high levels of satisfactionand repeat business',
                'Processed online orders, including the Click & Collect service, with meticulous attention to detail',
                'Demonstrated excellent organizational skills in managing the sales area,including goods presentation and clearance',
                'Delivered exceptional customer service in German, English, and Arabic,catering to diverse clientele',
                'Played a crucial role in driving sales growth within the goods receiving and processing department',
                'Successfully opened and closed cash registers, maintaining accuracy and integrity of financial transactions.',
                'Quickly and efficiently adapted to the assigned area of responsibility,showcasing remarkable adaptability and competence.'
            ]
        }
    },
    {
        date: '2021',
        position: 'Business Developer ', 
        details: {
            period:'May - 2021 till April - 2022',
            company: 'Jawdat Al Binaa LLC',
            location: 'Bern - CH / Remote',
            responsibilities: [
                'Coordinated closely with sales and marketing teams to develop and execute effective strategies for promoting company products and services.',
                'Assisted in the management of budgets and timelines for multiple projects, ensuring successful completion within established parameters',
                'Fostered and maintained strong relationships with existing clients while actively pursuing new business opportunities.',
                'Tracked and reported on key performance indicators, providing critical insights for future growth and success'
            ]
        }
    },
    {
        date: '2020',
        position: 'BD Intern',
        details:{
            period:'November - 2020 till April - 2021',
            company: 'Jawdat Al Binaa LLC',
            location: 'Bern - CH / Remote',
            responsibilities: [
               'Conductied market research to identify potential clients and projects',
               'Assisting in the development and implementation of strategies to generate new business leads',
               'Assisting in the creation of compelling presentations and documentation',
               'Supporting efforts to build and maintain strong relationships with existing and potential clients'
            ]
        }
    },
    {
        date: '2016',
        position: 'Project Coordinator',
        details:{
            period:'February - 2016 till June - 2020',
            company: 'Generation Syria Organization',
            location: 'Bern - CH',
            responsibilities: [
               'Planned and organized project activities, including project plans and timelines',
               'Monitored progress, identified issues, resolved problems, and managed timelines and budgets',
               'Assessed outcomes, defined areas for improvement, and made recommendations for future projects',
               'Efficiently managed administrative tasks, including documentation and expenses.'
            ]
        }
    },
    {
        date: '2012',
        position: 'PM  Assistant',
        details:{
            period:'December - 2012 till May - 2014',
            company: 'Zail Al Hussain LLC',
            location: 'Dubai - UAE',
            responsibilities: [
               'Successfully managed and coordinated various aspects of multiple landscaping projects',
               'Contributed to the planning, development, and execution of projects, ensuring compliance with established specifications, budgets, and deadlines',
               'Managed day-to-day project activities and monitored progress to ensure successful completion',
               'Provided technical support and ensured compliance with all safety procedures and regulations set by local authorities',
               'Adeptly managed project finances by monitoring expenses, processing invoices, and payments in a timely manner, and keeping projects within established budgets'
            ]
        }
    },
    

]



export default function Home() {
    return <main>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet" />
        <Container>
            <PersonalInformation intro={INTRO}  />
            <Experiences data={EXPERIENCE} headline={HEADLINE}/>
        </Container>
    </main>

}
