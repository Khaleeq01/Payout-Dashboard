import { useMemo } from "react";
import TypeParentStateInactiveB from "./TypeParentStateInactiveB";
import Property1WalletCredits from "./Property1WalletCredits";

const BaseNavigationBar = ({
  navbarIcon,
  navbarIcon1,
  navbarIcon2,
  showBaseNavButton,
  baseNavButtonVisible,
  baseNavButtonVisible1,
  navbarIconOpacity,
  baseNavButtonBackgroundColor,
  navbarIconOpacity1,
  homeFontFamily,
  homeOpacity,
}) => {
  const navbarIconStyle = useMemo(() => {
    return {
      opacity: navbarIconOpacity,
    };
  }, [navbarIconOpacity]);

  const typeParentStateInactiveBStyle = useMemo(() => {
    return {
      backgroundColor: baseNavButtonBackgroundColor,
    };
  }, [baseNavButtonBackgroundColor]);

  const navbarIconStyle1 = useMemo(() => {
    return {
      opacity: navbarIconOpacity1,
    };
  }, [navbarIconOpacity1]);

  const homeStyle = useMemo(() => {
    return {
      fontFamily: homeFontFamily,
      opacity: homeOpacity,
    };
  }, [homeFontFamily, homeOpacity]);

  return (
    <div className="bg-secondary-navbar w-56 flex flex-col items-center justify-start py-4 px-2.5 box-border gap-[16px] text-left text-mini text-black-100 font-sub-title-medium flex-1">
      <div className="flex-1 flex flex-col items-center justify-start gap-[24px]">
        <div className="w-48 shrink-0 flex flex-row items-center justify-start relative gap-[12px]">
          <div className="relative rounded bg-black-100 w-10 h-10 z-[0]" />
          <div className="flex-1 flex flex-col items-start justify-center gap-[4px] z-[1]">
            <div className="self-stretch relative leading-[22px] font-medium">
              Nishyan
            </div>
            <div className="self-stretch relative text-smi [text-decoration:underline] leading-[16px] font-body-2-medium opacity-[0.8]">
              Visit store
            </div>
          </div>
          <img
            className="absolute my-0 mx-[!important] top-[0.5px] left-[0.5px] rounded w-[39px] h-[39px] object-cover z-[2]"
            alt=""
            src="/image@2x.png"
          />
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0 object-cover z-[3]"
            alt=""
            src="/bold--chevron-down@2x.png"
          />
        </div>
        <div className="flex-1 shrink-0 flex flex-col items-start justify-start gap-[4px]">
          <TypeParentStateInactiveB
            navbarIcon="/navbar-icon@2x.png"
            home="Home"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="unset"
          />
          <TypeParentStateInactiveB
            navbarIcon="/navbar-icon@2x.png"
            home="Orders"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          <TypeParentStateInactiveB
            navbarIcon="/navbar-icon@2x.png"
            home="Products"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          <TypeParentStateInactiveB
            navbarIcon="/navbar-icon@2x.png"
            home="Delivery"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          <TypeParentStateInactiveB
            navbarIcon="/navbar-icon@2x.png"
            home="Marketing"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          <TypeParentStateInactiveB
            navbarIcon="/navbar-icon@2x.png"
            home="Analytics"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          <TypeParentStateInactiveB
            navbarIcon="/navbar-icon@2x.png"
            home="Payouts"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          <TypeParentStateInactiveB
            navbarIcon="/navbar-icon@2x.png"
            home="Tools"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          <TypeParentStateInactiveB
            navbarIcon="/navbar-icon@2x.png"
            home="Discounts"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          <TypeParentStateInactiveB
            navbarIcon="/navbar-icon@2x.png"
            home="Audience"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          <TypeParentStateInactiveB
            navbarIcon="/navbar-icon@2x.png"
            home="Affiliates"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          <TypeParentStateInactiveB
            navbarIcon="/navbar-icon@2x.png"
            home="Vendors"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          <TypeParentStateInactiveB
            navbarIcon="/navbar-icon@2x.png"
            home="Appearance"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
          <TypeParentStateInactiveB
            navbarIcon="/navbar-icon@2x.png"
            home="Plugins"
            typeParentStateInactiveBFlexShrink="0"
            navbarIconOpacity="0.8"
          />
        </div>
      </div>
      <Property1WalletCredits />
    </div>
  );
};

export default BaseNavigationBar;
