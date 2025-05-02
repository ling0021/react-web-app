import { useState } from "react";
import { createProfile } from "../services/auth-service";
import { Profile } from "../model/Profile";

export const useRegister = () => {
  const [error, setError] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [toast, setToast] = useState<string>("");
  const signup = (profile: Profile) => {
    setLoader(true);
    createProfile(profile)
      .then((response) => {
        if (response && response.status === 201) {
          setToast("Profile created successfully");
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoader(false));
  };
  return { signup, error, isLoading, toast };
};
