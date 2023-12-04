import React from 'react'

export const CG1_Closed_Jobs = () => {

  let now = new Date();
  console.log(now);

  const closedJobsArr = [
    {
      title: "Army Reserve Administrator",
      id: "ara",
      openDate: "11/04/23",
      closeDate: "11/24/23",
      completeInterviews: 0,
    },
    {
      title: "Army Reserve Administrator",
      id: "ara",
      openDate: "11/22/23",
      closeDate: "11/27/23",
      completeInterviews: 0,
    },
  ]

  return (
    <div className="container h-screen">
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
                    Days since opened: 32
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
                    Days since opened: 14
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