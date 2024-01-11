import React from 'react'

const Content = () => {
  return (
    <div className='content-container'>
    <h1 className='h1-container'>
        Verify your Certificate
    </h1>
    <div className='container'>
        <form className='form-container'>
        <h2 className='h2-container'>Verify Course Certificate</h2>
<input type="text" placeholder="Enter Certificate Code" />
<button type="submit" className='verify-button'>Verify</button>
        </form>
    </div>
    {/* representation purposes */}
    <table className='table-container'>
        <th id='head'>
            Certificate Serial No.
            <td>
                20190141470
            </td>
        </th>
        <th id='head'>
            Full Name
            <td>
                Joshua Dumaguete
            </td>
        </th>
        <th id='head'>
            Course Completed
            <td>
                HTML & CSS
            </td>
        </th>
        <th className='certified-container'id='head'>
            Certified
        </th>
    </table>
</div>
  )
}

export default Content