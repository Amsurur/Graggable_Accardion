import PropTypes from "prop-types";
import { useState } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";
import TableRow from "@mui/material/TableRow";
import MenuItem from "@mui/material/MenuItem";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";

// third-party
// import { format } from "date-fns";
import { Draggable } from "@hello-pangea/dnd";

import { IconButton } from "@mui/material";

// drag wrapper
const getDragWrapper = (isDragging) => {
  const bgcolor = "red";
  return {
    backgroundColor: isDragging ? bgcolor : "transparent",
    userSelect: "none",
  };
};

// ==============================|| KANBAN BACKLOGS - ITEMS ||============================== //

export default function Items({ itemId, index }) {
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

  const item = backlogs?.items.filter((data) => data.id === itemId)[0];
  const itemColumn = backlogs?.columns.filter(
    (column) => column.itemIds.filter((id) => id === item.id)[0]
  )[0];
  const itemProfile = backlogs?.profiles.filter(
    (profile) => profile.id === item.assign
  )[0];

  //   const handlerDetails = () => {
  //     handlerKanbanDialog(itemId);
  //   };

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event?.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //   const [open, setOpen] = useState(false);
  //   const handleModalClose = (status) => {
  //     setOpen(false);
  //     if (status) {
  //       deleteItem(item.id);
  //       openSnackbar({
  //         open: true,
  //         message: "Task Deleted successfully",
  //         anchorOrigin: { vertical: "top", horizontal: "right" },
  //         variant: "alert",
  //         alert: { color: "success" },
  //       });
  //     }
  //   };

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <TableRow
          hover
          key={item.id}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          sx={{
            "& th,& td": { whiteSpace: "nowrap" },
            "& .more-button": { opacity: 0 },
            ":hover": { "& .more-button": { opacity: 1 } },
            ...(Boolean(anchorEl) && { "& .more-button": { opacity: 1 } }),
            ...getDragWrapper(snapshot.isDragging, theme),
          }}
        >
          <TableCell sx={{ pl: 3, minWidth: 120, width: 120, height: 46 }} />
          <TableCell sx={{ width: 110, minWidth: 110 }}>
            <Stack direction="row" spacing={0.75} alignItems="center">
              {/* <Task
                size={16}
                style={{ color: theme.palette.info.main, marginTop: -2 }}
              /> */}
              <Typography variant="subtitle2">{item.id}</Typography>
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
              //   onClick={handlerDetails}
              sx={{
                overflow: "hidden",
                display: "block",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                ":hover": { color: "info.main" },
                cursor: "pointer",
              }}
            >
              {item.title}
            </Link>
          </TableCell>
          <TableCell sx={{ width: 60, minWidth: 60 }}>
            <IconButton
              className="more-button"
              size="small"
              onClick={handleClick}
              aria-controls="menu-comment"
              aria-haspopup="true"
              color="secondary"
              sx={{ color: "text.secondary" }}
            >
              {/* <MoreIcon /> */}more
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
                  //   handlerDetails();
                }}
              >
                Edit
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  //   setOpen(true);
                }}
              >
                Delete
              </MenuItem>
            </Menu>
            {/* <AlertItemDelete
              title={item.title}
              open={open}
              handleClose={handleModalClose}
            /> */}
          </TableCell>
          <TableCell sx={{ width: 90, minWidth: 90 }}>
            {itemColumn ? itemColumn.title : "New"}
          </TableCell>
          <TableCell sx={{ width: 140, minWidth: 140 }}>
            {itemProfile ? itemProfile.name : ""}
          </TableCell>
          <TableCell
            sx={{ width: 85, minWidth: 85, textTransform: "capitalize" }}
          >
            {item.priority}
          </TableCell>
          <TableCell sx={{ width: 120, minWidth: 120 }}>
            {/* {item.dueDate ? format(new Date(item.dueDate), "d MMM yyyy") : ""} */}
          </TableCell>
        </TableRow>
      )}
    </Draggable>
  );
}

Items.propTypes = { itemId: PropTypes.string, index: PropTypes.number };
