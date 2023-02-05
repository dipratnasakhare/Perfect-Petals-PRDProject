import { Accordion, Box, SimpleGrid } from "@chakra-ui/react";
import { AccordionBox } from "../AcordioanBox/AcordioanBox";
import { NormalBox } from "../NormalTextBoxes/NormalTextBoxes";
import styled from "./FooterTextBar.module.css";

export const FooterTextBar = () => {
  let first = [
    {
      text: "Check Order Status",
      data: "Order & Purchases",
    },
    {
      text: "Shipping, Delivery & Pickup",
    },
    {
      text: "Returns & Exchanges",
    },
    {
      text: "Price Match Guarantee",
    },
    {
      text: "Product Recalls",
    },
    {
      text: "Trade-In Program",
    },
    {
      text: "Gift Cards",
    },
  ];
  let second = [
    {
      text: "Visit our Support Center",
      data: "Support & Services",
    },
    {
      text: "Shop with an Expert",
    },
    {
      text: "Schedule a Service",
    },
    {
      text: "Manage an Appointment",
    },
    {
      text: "Protection & Support Plans",
    },
    {
      text: "Haul Away & Recycling",
    },
    {
      text: "Contact Us",
    },
  ];
  let third = [
    {
      text: "Affiliate Program",
      data: "Partnerships",
    },
    {
      text: "Advertise with Us",
    },
    {
      text: "Developers",
    },
    {
      text: "style Capsule Health",
    },
    {
      text: "style Capsule Education",
    },
    {
      text: "style Capsule Business",
    },
  ];

  let forth = [
    {
      text: "Style Capsule® Credit Card",
      data: "Payment Options",
    },
    {
      text: "Pay Your Bill at Citibank",
    },
    {
      text: "Lease to Own",
    },
  ];
  let five = [
    {
      text: "Style Capsule Totaltech",
      data: "Rewards & Membership",
    },
    {
      text: "My Style Capsule",
    },
    {
      text: "View Points & Certificates",
    },
    {
      text: "Member Offers",
    },
  ];
  let six = [
    {
      text: "Corporate Information",
      data: "About Style Capsule",
    },
    {
      text: "Careers",
    },
    {
      text: "Corporate Responsibility & Sustainability",
    },
    {
      text: "Discover & Learn",
    },
  ];

  return (
    <Box m="auto">
      <Box display={["none", "flex"]}></Box>

      <SimpleGrid
        display={["grid", "grid", "grid", "none"]}
        columns={[1, 1, 1, 3]}
        gap="10px"
        className={styled.box}
      >
        <Accordion>
          <AccordionBox List={first} />
          <AccordionBox List={second} />
          <AccordionBox List={third} />
          <AccordionBox List={forth} />
          <AccordionBox List={five} />
          <AccordionBox List={six} />
        </Accordion>
      </SimpleGrid>
      <SimpleGrid
        display={["none", "none", "none", "grid"]}
        columns={[1, 1, 1, 3]}
        gap="10px"
        className={styled.box}
      >
        <NormalBox List={first} />
        <NormalBox List={second} />
        <NormalBox List={third} />
        <NormalBox List={forth} />
        <NormalBox List={five} />
        <NormalBox List={six} />
      </SimpleGrid>
    </Box>
  );
}
