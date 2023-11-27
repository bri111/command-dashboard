import React from 'react'

export const CG1_Closed_Jobs = () => {

  let now = new Date();
  console.log(now);

  const closedJobsArr = [
    {
      title: "Army Reserve Administrator",
      id: "ara",
      openedDate: "11/09/23",
      closedDate: "11/21/23",
      completeInterviews: 0,
    },
    {
      title: "Army Reserve Administrator",
      id: "ara",
      openedDate: "11/09/23",
      closedDate: "11/21/23",
      completeInterviews: 0,
    },
  ]

  return (
    <div className="container h-screen">
      <div className="text-2xl text-center">Closed Announcements</div>
      <div className='container'>
        <div className="row">
          <div className="card card-side bg-base-100 shadow-xl h-1/2 m-2">
            <div className="card-body">
              <h2 className="card-title">
                {closedJobsArr[0].title}
              </h2>
              <div className="card-actions justify-start">
                <div className="grid grid-rows-4 grid-flow-col">
                  <div>
                    Open on: {closedJobsArr[0].openedDate}
                  </div>
                  <div>
                    Closed on: {closedJobsArr[0].closedDate}
                  </div>
                  <div>
                    Interviews completed: {""}
                    <div className="join">
                      <input className="join-item btn btn-sm" type="checkbox" name="options" aria-label="Yes" />
                      <input className="join-item btn btn-sm" type="checkbox" name="options" aria-label="No" />
                    </div>
                  </div>
                  <div>
                    Days since opened: 12
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl h-1/2 m-2">
            <div className="card-body">
              <h2 className="card-title">
                {closedJobsArr[1].title}
              </h2>
              <div className="card-actions justify-start">
                <div className="grid grid-rows-4 grid-flow-col">
                  <div>
                    Open on: {closedJobsArr[1].openedDate}
                  </div>
                  <div>
                    Closed on: {closedJobsArr[1].closedDate}
                  </div>
                  <div>
                    Interviews completed: {""}
                    <div className="join">
                      <input className="join-item btn btn-sm" type="checkbox" name="options" aria-label="Yes" />
                      <input className="join-item btn btn-sm" type="checkbox" name="options" aria-label="No" />
                    </div>
                  </div>
                  <div>
                    Days since opened: 12
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}