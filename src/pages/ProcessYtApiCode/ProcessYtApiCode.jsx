import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import UserLayout from '../../components/Layout/UserLayout';
import { ytApiCodeProcess } from '../../redux/actions/YtApiCodeAction';

const ProcessYtApiCode = () => {
  const [queryParameters] = useSearchParams();
  const [code, setCode] = useState(queryParameters.get('code'));
  const apiCodeRequest = useSelector((state) => state.ytApiCode);
  const { error, loading } = apiCodeRequest;
  const dispatch = useDispatch();

  useEffect(() => {
    setCode(queryParameters.get('code'));
    dispatch(ytApiCodeProcess(code));
  }, [code, dispatch, queryParameters]);

  if (loading) {
    return (
      <UserLayout>
        <div className="alert alert-warning my-2" role="alert">
          Your request is sent. Please wait.
        </div>
      </UserLayout>
    );
  }
  if (error) {
    return (
      <UserLayout>
        <div className="alert alert-danger my-2" role="alert">
          {error}
        </div>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <div className="alert alert-primary my-2" role="alert">
        Your request processed.
        <br />
        Your code is : {code}
      </div>
    </UserLayout>
  );
};

export default ProcessYtApiCode;
