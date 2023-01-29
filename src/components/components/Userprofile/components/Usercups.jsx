import React from 'react'
import style from '../style/userpage.module.css'
import testCup1 from '../../../../assets/images/just static data/1.png'
import testCup2 from '../../../../assets/images/just static data/2.png'
import testCup3 from '../../../../assets/images/just static data/3.png'
import testCup4 from '../../../../assets/images/just static data/4.png'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'
function Usercups({ userInformation }) {
  const [firstCup, secondCup, thirdCup, fourthCup] = userInformation.userAchive
  const { onHourClass } = firstCup
  const { activityMoreThan50 } = secondCup
  const { completeClassTweny } = thirdCup
  const { takeExamSite } = fourthCup
  return (
    <div
      className={`d-flex align-items-center justify-content-evenly flex-column mb-4`}
    >
      <div className="d-flex align-items-center justify-content-around w-100 flex-row-reverse">
        <div className={`${style.cupContaienr} curoser`}>
          <OverlayTrigger
            delay={{ hide: 200, show: 100 }}
            animation={true}
            overlay={(props) => <Tooltip {...props}>اولین کلاس خصوصی</Tooltip>}
            placement="top"
          >
            <Button variant="" className={`m-0 p-0 bg-none `}>
              <img
                src={testCup1}
                className={` ${
                  onHourClass ? style.cupimg : 'blackWhiteImage'
                } `}
                alt="sing ing cup"
              />
            </Button>
          </OverlayTrigger>
        </div>
        <div className={`${style.cupContaienr} curoser`}>
          <OverlayTrigger
            delay={{ hide: 200, show: 100 }}
            animation={true}
            overlay={(props) => (
              <Tooltip {...props}> فعالیت بیشتر از 50 ساعت</Tooltip>
            )}
            placement="top"
          >
            <Button variant="" className={`m-0 p-0 bg-none `}>
              <img
                src={testCup2}
                alt="sing ing cup"
                className={` ${
                  activityMoreThan50 ? style.cupimg : 'blackWhiteImage'
                } `}
              />
            </Button>
          </OverlayTrigger>
        </div>
        <div className={`${style.cupContaienr} curoser`}>
          <OverlayTrigger
            delay={{ hide: 200, show: 100 }}
            animation={true}
            overlay={(props) => (
              <Tooltip {...props}> تمام کردن 20 جلسه خصوصی موفق</Tooltip>
            )}
            placement="top"
          >
            <Button variant="" className={`m-0 p-0 bg-none ${style.rateStart}`}>
              <img
                src={testCup3}
                alt="sing ing cup"
                className={` ${
                  completeClassTweny ? style.cupimg : 'blackWhiteImage'
                } `}
              />
            </Button>
          </OverlayTrigger>
        </div>
        <div className={`${style.cupContaienr} curoser`}>
          <OverlayTrigger
            delay={{ hide: 200, show: 100 }}
            animation={true}
            overlay={(props) => (
              <Tooltip {...props}> نمره قبولی آزمون سایت</Tooltip>
            )}
            placement="top"
          >
            <Button variant="" className={`m-0 p-0 bg-none ${style.rateStart}`}>
              <img
                src={testCup4}
                alt="sing ing cup"
                className={` ${
                  takeExamSite ? style.cupimg : 'blackWhiteImage'
                } `}
              />
            </Button>
          </OverlayTrigger>
        </div>
      </div>
      <div className="mt-4 w-100 text-center shadow-sm">
        <p>دستاورد های دانش آموز</p>
      </div>
    </div>
  )
}

export default Usercups
