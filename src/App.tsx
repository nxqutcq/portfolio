import { useRef } from 'react'
import './index.css'
import Navbar from './Navbar'
import { Skills } from './Skills'

export const App = () => {
  const mainRef = useRef(null)
  const skillsRef = useRef(null)
  const projectRef = useRef(null)
  const contactsRef = useRef(null)
  const socialsRef = useRef(null)

  const scrollRefs = {
    mainRef,
    skillsRef,
    projectRef,
    contactsRef,
    socialsRef,
  }

  return (
    <div translate="no" className="min-h-screen w-screen  flex flex-col">
      <div
        className="box main-image xs:text-sm xs1:text-base bg-black/60 items-center w-screen flex flex-col"
        ref={mainRef}
      >
        <header className="z-50 bg-black/30 py-2 fixed flex flex-col w-screen items-center">
          <Navbar scrollRefs={scrollRefs} />
        </header>
        <div className="flex flex-row w-full gap-x-[30%] items-center container justify-center mt-40">
          <div className="h-fit flex flex-col">
            <div>Hi there!</div>
            <h1>I'm Vladislav Nelipovich</h1>
            <div>Frontend Developer</div>
          </div>
          <div>
            <div className="max-w-[200px] overflow-hidden rounded-full">
              <img
                draggable={false}
                src="https://sun23-2.userapi.com/impf/c844617/v844617904/200033/oAT8xJ6LLDQ.jpg?size=1600x1600&quality=96&sign=4dd0eb4d7aa64ae246dddc15eb060c65&type=album"
                alt="my-photo"
              />
            </div>
          </div>
        </div>
      </div>
      <div ref={skillsRef} className="box">
        <Skills />
      </div>
      <div ref={projectRef} className="box second-image items-center flex justify-center bg-black/60">
        <div className="container">
          <h3>FreeToGame</h3>
          <span>Description</span>
        </div>
        <div></div>
        <div></div>
      </div>
      <div ref={contactsRef} className="box">
        contacts
        <a className="pt-20" href="mailto:vnelipovich63@gmail.com">
          Say hello
        </a>
      </div>
      <footer ref={socialsRef} className="">
        <div className="box">
          <div className="max-w-[30px] max-h-[30px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 3.47059V20.5294C22 20.9194 21.8451 21.2935 21.5693 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47059C3.08056 22 2.70651 21.8451 2.43073 21.5693C2.15494 21.2935 2 20.9194 2 20.5294V3.47059C2 3.08056 2.15494 2.70651 2.43073 2.43073C2.70651 2.15494 3.08056 2 3.47059 2H20.5294C20.9194 2 21.2935 2.15494 21.5693 2.43073C21.8451 2.70651 22 3.08056 22 3.47059ZM7.88235 9.64706H4.94118V19.0588H7.88235V9.64706ZM8.14706 6.41177C8.14861 6.18929 8.10632 5.96869 8.02261 5.76255C7.93891 5.55642 7.81542 5.36879 7.65919 5.21039C7.50297 5.05198 7.31708 4.92589 7.11213 4.83933C6.90718 4.75277 6.68718 4.70742 6.46471 4.70588H6.41177C5.95934 4.70588 5.52544 4.88561 5.20552 5.20552C4.88561 5.52544 4.70588 5.95934 4.70588 6.41177C4.70588 6.86419 4.88561 7.29809 5.20552 7.61801C5.52544 7.93792 5.95934 8.11765 6.41177 8.11765C6.63426 8.12312 6.85565 8.0847 7.06328 8.00458C7.27092 7.92447 7.46074 7.80422 7.62189 7.65072C7.78304 7.49722 7.91237 7.31346 8.00248 7.10996C8.09259 6.90646 8.14172 6.6872 8.14706 6.46471V6.41177ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7799 9.77345C13.2576 10.0397 12.8143 10.4383 12.4941 10.9294H12.4118V9.64706H9.64706V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.3681 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z"
                fill="#000000"
              />
            </svg>
          </div>
          <div className="max-w-[30px] max-h-[30px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 256 256"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M128,0 C57.307,0 0,57.307 0,128 L0,128 C0,198.693 57.307,256 128,256 L128,256 C198.693,256 256,198.693 256,128 L256,128 C256,57.307 198.693,0 128,0 L128,0 Z"
                  fill="#40B3E0"
                ></path>
                <path
                  d="M190.2826,73.6308 L167.4206,188.8978 C167.4206,188.8978 164.2236,196.8918 155.4306,193.0548 L102.6726,152.6068 L83.4886,143.3348 L51.1946,132.4628 C51.1946,132.4628 46.2386,130.7048 45.7586,126.8678 C45.2796,123.0308 51.3546,120.9528 51.3546,120.9528 L179.7306,70.5928 C179.7306,70.5928 190.2826,65.9568 190.2826,73.6308"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M98.6178,187.6035 C98.6178,187.6035 97.0778,187.4595 95.1588,181.3835 C93.2408,175.3085 83.4888,143.3345 83.4888,143.3345 L161.0258,94.0945 C161.0258,94.0945 165.5028,91.3765 165.3428,94.0945 C165.3428,94.0945 166.1418,94.5735 163.7438,96.8115 C161.3458,99.0505 102.8328,151.6475 102.8328,151.6475"
                  fill="#D2E5F1"
                ></path>
                <path
                  d="M122.9015,168.1154 L102.0335,187.1414 C102.0335,187.1414 100.4025,188.3794 98.6175,187.6034 L102.6135,152.2624"
                  fill="#B5CFE4"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  )
}
