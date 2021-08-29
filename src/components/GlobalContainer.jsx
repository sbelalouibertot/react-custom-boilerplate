import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

const GlobalContainer = ({ children }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  
  useEffect(() => {
    // Load data
  }, []);

  return children;
};

export default GlobalContainer;