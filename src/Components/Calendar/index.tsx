import Link from "next/link"
import calendar from "./Calendar.module.css"
import _ from "lodash"
import moment from "moment"
import { CalendarRow } from "../../types"
import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon
} from 'next-share'

export default function Calendar({ data }: { data: CalendarRow[] }) {
  const dateList = _.groupBy(data, (row) => row.start_date)
  return (
    <>
      <div className={calendar.body}>
        <div className={calendar.header}>
          <h1>2023 Calendar</h1>
          <div className={calendar.bio}>
            <p>
              To <Link href="/calendar/submit">submit</Link> to the calendar please <Link href="/about">log in</Link>.
              All submissions are subject to review. If you would like to receive updates
              you can sign up for our <Link href="/about"> newsletter</Link> or <Link
                href="https://calendar.google.com/calendar/u/0?cid=anZhcmR5QHphdmFsLmNv"
                target="webapp-tab"
              >
                add calendar
              </Link>.
            </p>
            <p>
              By submitting to the calendar you are agreeing to our <Link href="/">Privacy Policy</Link>
            </p>
          </div>
        </div>
        {Object.entries(dateList).filter(([date])=>{return moment(date, "MM/DD/YYYY").diff(moment())> 0}).map(([date, list]) => {
          return (
            <div key={date} className={calendar.dateGroup}>
              <div key={date}>
                <Link legacyBehavior href={`#${date}`}>
                  <a>
                    <h2
                      id={date}
                      className={calendar.date}
                    >
                      {moment(date, "MM/DD/YYYY").format("MMMM DD, YYYY")}
                    </h2>
                  </a>
                </Link>
              </div>
              {list.map((row) => {
                return (
                  <div key={row.id} className={calendar.eventRow}>
                    <Link className={calendar.mainEvent} href={`/calendar/${row.id}`}>
                      {" "}
                      <strong>{row.name}</strong>
                      <div className={calendar.eventInfo}>
                      <div className={calendar.spacer}></div>
                      <span className={calendar.timeColumn}>
                        {row.start_time}
                      
                      {" "}- {row.end_time}</span><div className={calendar.spacer}></div> {row.location}
                      <div className={calendar.spacer}></div>
                      
                    {row.description}
                    <div className={calendar.spacer}></div>
                    </div>
                    </Link>
                    <div className={calendar.add}>
                      <Link
                        href="https://calendar.google.com/calendar/u/0?cid=anZhcmR5QHphdmFsLmNv"
                        target="webapp-tab"
                      >
                        Add to calendar
                      </Link>
                    </div>
                    <div className={calendar.eventSocialsBody}>

                      <TwitterShareButton
                        url={`https://stp-next-app-main.vercel.app/calendar/${row.id}`} >
                        <div className={calendar.eventSocials}>
                          <TwitterIcon size={25} round />
                        </div>
                      </TwitterShareButton>

                      <FacebookShareButton
                        url={`https://stp-next-app-main.vercel.app/calendar/${row.id}`} >
                        <div className={calendar.eventSocials}>

                          <FacebookIcon size={25} round />
                        </div>
                      </FacebookShareButton>

                      <RedditShareButton
                        url={`https://stp-next-app-main.vercel.app/calendar/${row.id}`} >
                        <div className={calendar.eventSocials}>
                          <RedditIcon size={25} round />
                        </div>
                      </RedditShareButton>

                      <WhatsappShareButton
                        url={`https://stp-next-app-main.vercel.app/calendar/${row.id}`} >
                        <div className={calendar.eventSocials}>
                          <WhatsappIcon size={25} round />
                        </div>
                      </WhatsappShareButton>

                      <EmailShareButton id={calendar.button}
                        url={`https://stp-next-app-main.vercel.app/calendar/${row.id}`} >
                        <div className={calendar.eventSocials}>
                          <EmailIcon size={25} round />
                        </div>
                      </EmailShareButton>

                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}
