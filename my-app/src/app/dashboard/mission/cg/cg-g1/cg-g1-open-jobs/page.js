import React from 'react'

export const CG1_Open_Jobs = () => {
  return (
    <div className="container h-screen">
      <div className="text-2xl text-center">Open Jobs</div>
      <div className='container'>
        <div className="row">
          <div className="card card-side bg-base-100 shadow-xl h-1/2 m-2">
            <div className="card-body">
              <h2 className="card-title">
                Job 1
              </h2>
              Open on 10/2/22
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl h-1/2 m-2">
            <div className="card-body">
              <h2 className="card-title">
                Job 2
              </h2>
              Open on 10/2/23
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl h-1/2 m-2">
            <div className="card-body">
              <h2 className="card-title">
                Job 3
              </h2>
              Open on 10/22/23
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl h-1/2 m-2">
            <div className="card-body">
              <h2 className="card-title">
                Job 4
              </h2>
              Open on 11/2/23
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl h-1/2 m-2">
            <div className="card-body">
              <h2 className="card-title">
                Job 5
              </h2>
              Open on 11/12/23
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}