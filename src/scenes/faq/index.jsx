import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What services does Blackcoffer provide to enterprises globally?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Blackcoffer offers professional statistical advice, technological
            solutions, consulting, information management, and global enterprise
            analysis.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is Blackcoffer's goal as a consulting firm?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Blackcoffer aspires to be the world's premier consulting firm,
            guided by fundamental principles, client value, employee caliber,
            and ethical decision-making.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What are some of Blackcoffer's active research interests?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Blackcoffer's research interests include technology, statistical
            theory, analysis of longitudinal data, small sample sizes, and
            social analytics.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is Blackcoffer's mission regarding staffing and consulting
            needs for organizations?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Blackcoffer's mission is to connect the right people to specialized
            staffing and consulting needs, fostering organizational growth and
            satisfying employment for experts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How does Blackcoffer encourage its workforce to contribute to
            society?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Blackcoffer motivates its workforce to be socially responsible
            business citizens, actively engaging in communities and upholding
            values in decision-making and client interactions.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
