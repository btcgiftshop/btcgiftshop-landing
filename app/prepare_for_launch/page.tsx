import { CountdownTimer } from '@/components/CountdownTimer/CountdownTimer'
import Navbar from "./Navbar"
let target = new Date('2024-08-29T02:13:00')
const timerLabels = ['days', 'hours', 'minutes', 'seconds']

const page = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-top bg-body-color dark:bg-body-color-dark p-2">
      {/* <main className="max-w-[1920px] mx-auto relative overflow-hidden font-primary bg-body-color dark:bg-body-color-dark"></main> */}
      <Navbar />
      <div className="flex h-screen max-h-[500px] items-center justify-center bg-cover bg-center">
        <div className="flex flex-col gap-10 md:gap-20 max-w-[80%] text-center items-center">
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-semibold text-[30px] md:text-[50px]">
              Prepare for{" "}
              <span className="text-orange-600">
                {" "}
                Launch
              </span>
            </h1>
          </div>
          <CountdownTimer targetDate={target.toISOString()} labels={timerLabels} />
        </div>
      </div>
    </main>
  );
}

export default page