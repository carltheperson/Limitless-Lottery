import Button from "../components/button"
import Router from 'next/router'
import NoAuthHeader from "../components/noAuthHeader"


export default function NoAuthIndex() {

  return (
    <div>
      <NoAuthHeader />
      <div className="container">
        <div className="text">
          <p className="thin">
            A simulation of being able to buy as many lottery tickets as you want.
      </p>
          <p>
            Will you make more than you spend?
        </p>
          <div className="btn">
            <Button onClick={() => { Router.push("/sign-up") }}>Sign Up</Button>
          </div>


        </div>

        <div className="img-container">
          <img className="img" src="/images/tickets.png" alt="tickets" width="340px" height="630px" />
        </div>

        <style jsx> {
          `
        p {
          text-align: center;
          font-size: 4em;
        }

        .thin {
          font-weight: 400;
        }

        .container {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }

        .text {
          width: 100%;
          padding: 10% 8% 0 8%;
        }

        .img {
          display: block !important;
          float: right;
        }

        .img-container {
          width: 40%;
          text-align: right;
          display: block !important;
          padding-top: 5%;
        }

        .btn {
          text-align: center;
          padding-top: 3em;
        }
      `
        }
        </style>
      </div>

    </div>
  )
}