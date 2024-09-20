"use client";

// React Imports
import { useState } from "react";

// Next Imports
import Link from "next/link";

// MUI Imports
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
// import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
// import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import { FaGoogle } from "react-icons/fa";

// Third-party Imports
// import classnames from "classnames";

// Type Imports
// import type { Mode } from "@core/types";

// Component Imports
// import Logo from "@components/layout/shared/Logo";

// Hook Imports
// import { useImageVariant } from "@core/hooks/useImageVariant";
// import { useSettings } from "@core/hooks/useSettings";

const CardRegister = () => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  // Vars
  // const darkImg = "/images/pages/auth-v2-mask-2-dark.png";
  // const lightImg = "/images/pages/auth-v2-mask-2-light.png";
  // const darkIllustration = "/images/illustrations/auth/v2-register-dark.png";
  // const lightIllustration = "/images/illustrations/auth/v2-register-light.png";
  // const borderedDarkIllustration = "/images/illustrations/auth/v2-register-dark-border.png";
  // const borderedLightIllustration = "/images/illustrations/auth/v2-register-light-border.png";

  // Hooks
  // const { settings } = useSettings();
  // const authBackground = useImageVariant(mode, lightImg, darkImg);

  // const characterIllustration = useImageVariant(mode, lightIllustration, darkIllustration, borderedLightIllustration, borderedDarkIllustration);

  const handleClickShowPassword = () => setIsPasswordShown((show) => !show);

  return (
    <div className="flex bs-full justify-center">
      <div
      // className={classnames("flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden", {
      //   "border-ie": settings.skin === "bordered",
      // })}
      >
        <div className="pli-6 max-lg:mbs-40 lg:mbe-24"> {/* <img src={characterIllustration} alt="character-illustration" className="max-bs-[650px] max-is-full bs-auto" /> */}</div>
        {/* <img src={authBackground} className="absolute bottom-[4%] z-[-1] is-full max-md:hidden" /> */}
      </div>
      <div className="flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]">
        {/* <div className="absolute block-start-5 sm:block-start-[38px] inline-start-6 sm:inline-start-[38px]"><Logo /> logo</div> */}

        <div className="flex flex-col gap-5 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset] mbs-11 sm:mbs-14 md:mbs-0">
          <div>
            <Typography variant="h4">Halo, Daftar Sekarang</Typography>
          </div>
          <form noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
            <TextField fullWidth label="Nama Perusahaan" />
            <TextField fullWidth label="Email Kerja" />
            <TextField
              fullWidth
              label="Buat Password"
              type={isPasswordShown ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={handleClickShowPassword} onMouseDown={(e) => e.preventDefault()}>
                      <i className={isPasswordShown ? "ri-eye-off-line" : "ri-eye-line"} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button fullWidth variant="contained" type="submit">
              Masuk
            </Button>

            <Divider className="gap-3 text-textPrimary">atau</Divider>
            <div className="flex justify-center items-center gap-2">
              <Button variant="outlined" startIcon={<FaGoogle />}>
                Lanjutkan dengan Google
              </Button>
            </div>
            <div className="flex justify-center items-center flex-wrap gap-2">
              <Typography>Belum punya akun?</Typography>
              <Typography component={Link} href="/register" color="primary">
                Masuk Disini
              </Typography>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardRegister;
