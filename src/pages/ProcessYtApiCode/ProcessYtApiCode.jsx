import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import UserLayout from "../../components/Layout/UserLayout";
import { ytApiCodeProcess } from "../../redux/actions/YtApiCodeAction";

const ProcessYtApiCode = () => {
  const [queryParameters] = useSearchParams();
    const [code, setCode] = useState(queryParameters.get("code"));
    const apiCodeRequest = useSelector((state) => state.ytApiCode)
    const { error, loading } = apiCodeRequest;
    const dispatch = useDispatch();
  
    useEffect(() => {
      setCode(queryParameters.get("code"));
      dispatch(ytApiCodeProcess(code))
  }, []);

    
  return (
    <UserLayout>
      {!error && !loading ? (
        <div class="alert alert-primary my-2" role="alert">
          Your request processed.
          <br />
          Your code is : {code}
        </div>
      ) : error ? (
        <div class="alert alert-danger my-2" role="alert">
        {error}
        </div>
      ) : (
        loading && (
          <div class="alert alert-warning my-2" role="alert">
            Your request is sent. Please wait.
           
          </div>
        )
      )}
    </UserLayout>
  );
};

export default ProcessYtApiCode;
