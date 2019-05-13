import React from 'react';
import logo from './logo.svg';
import './App.css';
import { APIService, RequestBody } from './APIService';
import { ApiResponse, ApiArticleResponse, ApiRequestAuthor } from './types';
import { APIResult, Endpoints } from "./constants";

const App: React.FC = () => {

  // instantiate API service
  const api = new APIService('my-super-secret-auth-token')
    .setHeaders([
      {
        key: 'Accept',
        value: 'application/json'
      }, {
        key: 'Content-Type',
        value: 'application/json'
      },
    ]);

  console.log(api.authToken);
  console.log(api.headers);


  // wrapping fetch in a handleFetch to prevent it firing on page load
  const handleFetch = () => {

    const body = new RequestBody<ApiRequestAuthor>({
      author: 'ross',
      category: "Typescript",
    });

    console.log(body.requestBody);

    fetch(
      Endpoints.articles_get, api.request(body))
      .then(res => res.json())
      .then(data => {
        const response: ApiResponse<ApiArticleResponse> = data;

        if (response.Result === APIResult.FAILURE) {
          // handle failed call here

        } else if (response.Result === APIResult.SUCCESS) {
          // do stuff with response
        }
      })
      .catch(() => {
        console.log("Fetch request error");
        // reset state, make button clickable again, etc
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
