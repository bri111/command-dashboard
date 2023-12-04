import React from 'react'

export const CG1_Open_Jobs = () => {

  const openJobArr = [
    {
      title: "Supervisory Staff Administrator",
      id: "ssa",
      openDate: "11/29/23",
      closeDate: "12/08/23",
      link: "https://www.usajobs.gov/job/758827000",
    },
    {
      title: "Deputy Director",
      id: "dd",
      openDate: "12/01/23",
      closeDate: "12/12/23",
      link: "https://www.usajobs.gov/job/761976000",
    },
  ]

  return (
    <div className="container h-screen">
      <div className='container'>
        <div className="row">

          <div className="card card-side bg-base-100 shadow-xl h-1/2 m-2">
            <div className="card-body flex">
              <h2 className="card-title justify-start">
                <a target="_blank" href={openJobArr[0].link} rel="noopener noreferrer"> {openJobArr[0].title} </a>
              </h2>
              <div className="card-actions justify-start">
                <div>
                  Valid through: {openJobArr[0].openDate} - {openJobArr[0].closeDate}
                </div>
              </div>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl h-1/2 m-2">
            <div className="card-body flex">
              <h2 className="card-title justify-start">
                <a target="_blank" href={openJobArr[1].link} rel="noopener noreferrer"> {openJobArr[1].title} </a>
              </h2>
              <div className="card-actions justify-start">
              <div>
                  Valid through: {openJobArr[1].openDate} - {openJobArr[1].closeDate}
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}