import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getContributors, getRepo} from "../actions/repos";
import './card.less'
import {useSelector} from "react-redux";

const Card = () => {
  const [isFetchingRepo, setIsFetchingRepo] = useState(true);
  const {username, reponame} = useParams();
  const [repo, setRepo] = useState({owner: {}});
  const [contributors, setContributors] = useState([]);
  
  useEffect(() => {
    getRepo(username, reponame, setRepo, setIsFetchingRepo);
    getContributors(username, reponame, setContributors, setIsFetchingRepo);
  }, []);
  
  
  const navigate = useNavigate();
  return (
    <div>
      {
        isFetchingRepo === false
          ?
          <div>
            <button
              onClick={() => navigate(-1)}
              className="back-btn">
              Back
            </button>
            <div className="card">
              <img src={repo.owner.avatar_url} alt=""/>
              <div className="name">{repo.name}</div>
              <div className="stars">{repo.stargazers_count}</div>
            </div>
            {contributors.map((c, index) =>
              <div>{index + 1}. {c.login}</div>
            )}
          </div>
          :
          <div className="fetching"></div>
      }
    </div>
  )
};

export default Card;
