import PropTypes from "prop-types";
import { useState } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import Table from "@mui/material/Table";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Collapse from "@mui/material/Collapse";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";

// third-party
// import { format } from "date-fns";
import { Droppable, Draggable } from "@hello-pangea/dnd";

// project-imports
import Items from "./SecondItem";

import { IconButton } from "@mui/material";

// drag wrapper
const getDragWrapper = (isDragging, theme, open) => {
  let bgcolor = "transparent";
  if (open) {
    bgcolor = "blue";
  }

  if (isDragging) {
    bgcolor = "Green";
  }

  return { backgroundColor: bgcolor, userSelect: "none" };
};

// drop wrapper
// const getDropWrapper = () => {
//   return { background: "transparent" };
// };

// ==============================|| KANBAN BACKLOGS - USER STORY ||============================== //

export default function UserStory({ story, index }) {
  console.log("story", story);
  console.log("index", index);
  const theme = useTheme();
  const [backlogs, setBacklogs] = useState({
    columns: [
      {
        id: "column-1",
        title: "New",
        itemIds: ["3542", "8903", "1381"],
      },
      {
        id: "column-2",
        title: "Active",
        itemIds: ["6739", "3950", "6924"],
      },
      {
        id: "column-3",
        title: "Resolved",
        itemIds: ["4398"],
      },
      {
        id: "column-4",
        title: "Closed",
        itemIds: ["9589", "3410", "8679"],
      },
    ],
    columnsOrder: ["column-1", "column-2", "column-3", "column-4"],
    comments: [
      {
        id: "comment-1",
        comment: "Comment 1",
        profileId: "profile-1",
      },
      {
        id: "comment-2",
        comment: "Comment 2",
        profileId: "profile-2",
      },
      {
        id: "comment-3",
        comment: "Comment 3",
        profileId: "profile-3",
      },
      {
        id: "comment-4",
        comment: "Comment 4",
        profileId: "profile-2",
      },
      {
        id: "comment-5",
        comment: "Comment 5",
        profileId: "profile-3",
      },
    ],
    items: [
      {
        assign: "profile-1",
        attachments: [],
        commentIds: ["comment-1"],
        description: "Content of item 1",
        dueDate: "Fri Feb 03 2023 15:20:14 GMT+0530 (India Standard Time)",
        id: "3542",
        image: "profile-back-1.png",
        priority: "low",
        title: "Online fees payment & instant announcements",
      },
      {
        assign: "profile-2",
        attachments: [],
        commentIds: ["comment-2", "comment-5"],
        description: "Content of item 2",
        dueDate: "Sat Jan 28 2023 15:23:25 GMT+0530 (India Standard Time)",
        id: "4398",
        image: false,
        priority: "high",
        title: "Creation and Maintenance of Inventory Objects",
      },
      {
        assign: "profile-3",
        attachments: [],
        description: "Content of item 3",
        dueDate: "Tue Feb 07 2023 15:24:38 GMT+0530 (India Standard Time)",
        id: "6739",
        image: false,
        priority: "low",
        title: "Update React & TypeScript version",
      },
      {
        assign: "profile-2",
        attachments: [],
        commentIds: ["comment-4"],
        description: "Content of item 4",
        dueDate: "Thu Feb 09 2023 15:25:46 GMT+0530 (India Standard Time)",
        id: "3950",
        image: "profile-back-2.png",
        priority: "low",
        title: "Set allowing rules for trusted applications.",
      },
      {
        assign: "profile-2",
        attachments: [],
        commentIds: ["comment-1", "comment-2", "comment-5"],
        description: "Content of item 5",
        dueDate: "Mon Feb 06 2023 15:26:53 GMT+0530 (India Standard Time)",
        id: "6924",
        image: "profile-back-3.png",
        priority: "medium",
        title: "Managing Applications Launch Control",
      },
      {
        assign: "profile-3",
        attachments: [],
        commentIds: ["comment-3", "comment-4"],
        description: "Content of item 6",
        dueDate: "Wed Feb 15 2023 10:30:37 GMT+0530 (India Standard Time)",
        id: "9589",
        image: false,
        priority: "medium",
        title: "Run codemods",
      },
      {
        assign: "profile-1",
        attachments: [],
        description: "Content of item 7",
        dueDate: "Mon Feb 20 2023 15:29:58 GMT+0530 (India Standard Time)",
        id: "3410",
        image: "profile-back-4.png",
        priority: "low",
        title: "Purchase Requisitions, Adjustments, and Transfers.",
      },
      {
        assign: "profile-1",
        attachments: [],
        description: "Content of item 8",
        dueDate: "Sat Mar 04 2023 15:31:05 GMT+0530 (India Standard Time)",
        id: "8903",
        image: false,
        priority: "low",
        title: "Attendance checking & homework details",
      },
      {
        assign: "profile-3",
        attachments: [],
        commentIds: ["comment-3"],
        description: "Content of item 9",
        dueDate: "Thu Feb 23 2023 15:32:13 GMT+0530 (India Standard Time)",
        id: "1381",
        image: false,
        priority: "high",
        title: "Admission, Staff & Schedule management",
      },
      {
        assign: "profile-2",
        attachments: [],
        commentIds: ["comment-5"],
        description: "Content of item 10",
        dueDate: "Mon Feb 27 2023 15:33:04 GMT+0530 (India Standard Time)",
        id: "8679",
        image: false,
        priority: "low",
        title: "Handling breaking changes",
      },
    ],
    profiles: [
      {
        id: "profile-1",
        avatar: "avatar-3.png",
        name: "Barney Thea",
        time: "2 min ago",
      },
      {
        id: "profile-2",
        avatar: "avatar-1.png",
        name: "Maddison Wilber",
        time: "1 day ago",
      },
      {
        id: "profile-3",
        avatar: "avatar-2.png",
        name: "John Doe",
        time: "now",
      },
    ],
    userStory: [
      {
        acceptance: "",
        assign: "profile-2",
        columnId: "column-4",
        commentIds: ["comment-5"],
        description:
          "Wo gegew jubva wiej pisniidi ic jarge mide ho ufcakub culuw ambupan te fezop rikic ekbet sevzog.",
        dueDate: "Mon Feb 27 2023 15:18:32 GMT+0530 (India Standard Time)",
        id: "2647",
        priority: "low",
        title: "School Management Backend",
        itemIds: ["3542", "8903", "1381"],
      },
      {
        acceptance:
          "Gid gimija ufuebjop vuji ze ir wi jih aruvihdok keubagob aguhogug uge tabu cure.",
        assign: "profile-3",
        columnId: "column-1",
        commentIds: ["comment-3"],
        description:
          "Onekane urwa joduzzij la cipebo zafuw atawa labfi hilza inepehhow inujufise hum.",
        dueDate: "Thu Feb 23 2023 15:13:31 GMT+0530 (India Standard Time)",
        id: "7833",
        priority: "high",
        title: "Inventory Implementation & Design",
        itemIds: ["4398", "3410"],
      },
      {
        acceptance:
          "Kiz ovmen fup jazaj rozibco fecki rasizsed pake redufkav joczatufo.",
        assign: "profile-3",
        columnId: "column-4",
        commentIds: ["comment-3", "comment-4"],
        description:
          "Lum vofdip keci fid fos di fikga kiinte izugfi gihude tewsadez ha niprizbef catin adahup.",
        dueDate: "Wed Feb 15 2023 10:30:11 GMT+0530 (India Standard Time)",
        id: "6940",
        priority: "medium",
        title: "Theme migration from v4 to v5",
        itemIds: ["6739", "9589", "8679"],
      },
      {
        acceptance: "Itorinceg cokmu ku pahkaavo argut.",
        assign: "profile-1",
        columnId: "column-3",
        commentIds: ["comment-4"],
        description:
          "Nar noljaw hi fusurri haodabi ewaw uc moetucu hilzirzo ca nidzerog ziw.",
        dueDate: "Tue Feb 07 2023 15:17:40 GMT+0530 (India Standard Time)",
        id: "4656",
        priority: "low",
        title: "Lunch Beauty Application",
        itemIds: ["3950", "6924"],
      },
    ],
    userStoryOrder: ["2647", "7833", "6940", "4656"],
  });
  const [open, setOpen] = useState(index === 0);

  const storyColumn = backlogs?.columns.filter(
    (column) => column.id === story.columnId
  )[0];
  const storyProfile = backlogs?.profiles.filter(
    (profile) => profile.id === story.assign
  )[0];

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event?.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Draggable draggableId={story.id} index={index}>
        {(provided, snapshot) => (
          <>
            <TableRow
              hover
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              sx={{
                ...getDragWrapper(snapshot.isDragging, theme, open),
                ...(!open && { "& .MuiTableCell-root": { border: "none" } }),
              }}
            >
              <TableCell sx={{ pl: 3, minWidth: 120, width: 120, height: 46 }}>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <Tooltip title="Add Task">
                    <IconButton
                      aria-label="expand row"
                      //   onClick={addItem}
                      size="small"
                      sx={{ fontSize: "1.15rem" }}
                    >
                      {/* <AddSquare color={theme.palette.primary.main} /> */}
                    </IconButton>
                  </Tooltip>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                    color="secondary"
                  >
                    {open ? <div>open</div> : <div>close</div>}
                  </IconButton>
                </Stack>
              </TableCell>
              <TableCell sx={{ width: 110, minWidth: 110 }}>
                <Stack direction="row" spacing={0.75} alignItems="center">
                  {/* <Hierarchy
                    size={16}
                    style={{ color: theme.palette.primary.main, marginTop: -2 }}
                  /> */}
                  <Typography variant="subtitle2">{story.id}</Typography>
                </Stack>
              </TableCell>
              <TableCell
                sx={{ maxWidth: "calc(100vw - 850px)", minWidth: 140 }}
                component="th"
                scope="row"
              >
                <Link
                  underline="hover"
                  color="default"
                  //   onClick={editStory}
                  sx={{
                    overflow: "hidden",
                    display: "block",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    ":hover": { color: "primary.main" },
                    cursor: "pointer",
                  }}
                >
                  {story.title}
                </Link>
              </TableCell>
              <TableCell sx={{ width: 60, minWidth: 60 }}>
                <IconButton
                  size="small"
                  aria-controls="menu-comment"
                  onClick={handleClick}
                  aria-haspopup="true"
                  color="secondary"
                  sx={{ color: "text.secondary" }}
                >
                  {/* <MoreIcon /> */}
                </IconButton>
                <Menu
                  id="menu-comment"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  variant="selectedMenu"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      //   editStory();
                    }}
                  >
                    Edit
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      //   setOpenModal(true);
                    }}
                  >
                    Delete
                  </MenuItem>
                </Menu>
                {/* <AlertStoryDelete
                  title={story.title}
                  open={openModal}
                  handleClose={handleModalClose}
                /> */}
              </TableCell>
              <TableCell sx={{ width: 90, minWidth: 90 }}>
                {storyColumn ? storyColumn.title : ""}
              </TableCell>
              <TableCell sx={{ width: 140, minWidth: 140 }}>
                {storyProfile ? storyProfile.name : ""}
              </TableCell>
              <TableCell
                sx={{ width: 85, minWidth: 85, textTransform: "capitalize" }}
              >
                {story.priority}
              </TableCell>
              <TableCell sx={{ width: 120, minWidth: 120 }}>
                {/* {story.dueDate
                  ? format(new Date(story.dueDate), "d MMM yyyy")
                  : ""} */}
              </TableCell>
            </TableRow>

            <Droppable droppableId={story.id} type="item">
              {(providedDrop) => (
                <TableRow
                  ref={providedDrop.innerRef}
                  {...providedDrop.droppableProps}
                  //   sx={getDropWrapper()}
                >
                  <TableCell sx={{ padding: 0 }} colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      {open && (
                        <Box sx={{ margin: 0 }}>
                          <TableContainer>
                            <Table size="small" aria-label="purchases">
                              <TableBody>
                                {story.itemIds?.map((itemId, i) => (
                                  <Items
                                    key={itemId}
                                    itemId={itemId}
                                    index={i}
                                  />
                                ))}
                                {providedDrop.placeholder}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Box>
                      )}
                    </Collapse>
                  </TableCell>
                </TableRow>
              )}
            </Droppable>
          </>
        )}
      </Draggable>
      {/* <EditStory
        story={story}
        open={openStoryDrawer}
        handleDrawerOpen={handleStoryDrawerOpen}
      /> */}
      {/* <AddItem
        open={openDrawer}
        handleDrawerOpen={handleDrawerOpen}
        storyId={story.id}
      /> */}
    </>
  );
}

UserStory.propTypes = { story: PropTypes.any, index: PropTypes.number };
