import React, { useState } from 'react';
import axios from 'axios';

// Takes an options object with type, either questions or answers and the id.
const ReportBtn = ({ options }) => {
  const [reported, setReported] = useState(false);

  const sendReport = () => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/${options.type}/${options.id}/report`, undefined ,{
      headers: {
        'Authorization': process.env.AUTH_KEY
      }
    })
      .then(() => setReported(true))
      .catch(err => console.log('Error reporting: ', err.message))
  }

  const reportAnswer = () => {
    if (!reported) {
      return sendReport()
    }
    console.log('Already Reported')
  }

  return (
    <span className="QA-report" role="button" data-testid="reportBtn" onClick={e => {
      reportAnswer();
    }
      }>{reported ? 'Reported' : 'Report'}</span>
  )
}

export default ReportBtn;