import React from 'react';

interface HeroSectionProps {
  title: string;
  titleOne?: string;
  para: string;
  para1?: string;
  callToActionLine?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  titleOne,
  para,
  callToActionLine,
  para1 = "",
}) => {
  return (
    <div className="space-y-3 text-left w-full py-5 ">
      <h1 className="md:text-[48px] text-3xl font-bold md:leading-[3.5rem] capitalize font-inter text-primary">
        {title}
      </h1>
      <p>
        <span className="text-ternary/90 text-[22px]">{titleOne}</span>
      </p>
      <p className="lg:text-[22px] text-base font-medium text-ternary font-nunito lg:pr-16">
        {para}
      </p>
      <p className="lg:text-[22px] text-base font-medium text-ternary font-nunito lg:pr-16">
        {para1}
      </p>
      {callToActionLine && (
        <p className="text-base font-semibold">{callToActionLine}</p>
      )}
    </div>
  );
};

export default HeroSection;
