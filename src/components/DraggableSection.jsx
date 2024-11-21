import { useState } from "react";

// material-ui
import { alpha, useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

// third-party
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

// project-imports
// import AddStory from './AddStory';
import UserStory from "./FirstAccardions";
// import MainCard from "components/MainCard";

// import {
// //   updateStoryItemOrder,
// //   updateStoryOrder,
//   //   useGetBacklogs,
// } from "api/kanban";
import { Card } from "@mui/material";

// assets
// import { Add } from "iconsax-react";

const getDropWrapper = (isDraggingOver, theme) => ({
  bgcolor: isDraggingOver
    ? alpha(theme.palette.secondary.lighter, 0.65)
    : "transparent",
});

// ==============================|| KANBAN - BACKLOGS ||============================== //

export default function Backlogs() {
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

  const onDragEnd = (result) => {
    const { source, destination, draggableId, type } = result;
    console.log("source: " + source);
    console.log("destination: " + destination);
    console.log("draggableId: " + draggableId);
    console.log("type: " + type);
    // No destination means the item was dropped outside a valid area
    if (!destination) return;

    // Dropped in the same position, no changes needed
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "user-story") {
      // Handle user-story reordering
      const newUserStoryOrder = Array.from(backlogs.userStoryOrder);
      newUserStoryOrder.splice(source.index, 1); // Remove from source index
      newUserStoryOrder.splice(destination.index, 0, draggableId); // Insert at new index

      setBacklogs((prev) => ({
        ...prev,
        userStoryOrder: newUserStoryOrder,
      }));
      return;
    }

    // Moving an item within or between user stories
    const sourceStory = backlogs.userStory.find(
      (story) => story.id === source.droppableId
    );
    const destinationStory = backlogs.userStory.find(
      (story) => story.id === destination.droppableId
    );

    if (sourceStory === destinationStory) {
      // Moving within the same story
      const newItemIds = Array.from(sourceStory.itemIds);
      newItemIds.splice(source.index, 1);
      newItemIds.splice(destination.index, 0, draggableId);

      const updatedStory = {
        ...sourceStory,
        itemIds: newItemIds,
      };

      const updatedUserStories = backlogs.userStory.map((story) =>
        story.id === updatedStory.id ? updatedStory : story
      );

      setBacklogs((prev) => ({
        ...prev,
        userStory: updatedUserStories,
      }));
    } else {
      // Moving between stories
      const sourceItemIds = Array.from(sourceStory.itemIds);
      sourceItemIds.splice(source.index, 1);

      const destinationItemIds = Array.from(destinationStory.itemIds);
      destinationItemIds.splice(destination.index, 0, draggableId);

      const updatedSourceStory = {
        ...sourceStory,
        itemIds: sourceItemIds,
      };

      const updatedDestinationStory = {
        ...destinationStory,
        itemIds: destinationItemIds,
      };

      const updatedUserStories = backlogs.userStory.map((story) =>
        story.id === updatedSourceStory.id
          ? updatedSourceStory
          : story.id === updatedDestinationStory.id
          ? updatedDestinationStory
          : story
      );

      setBacklogs((prev) => ({
        ...prev,
        userStory: updatedUserStories,
      }));
    }
  };

  // drawer

  return (
    <Card>
      <TableContainer sx={{ "& .MuiTableCell-root": { p: 1.25 } }}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="user-story" type="user-story">
            {(provided, snapshot) => (
              <Table
                size="small"
                aria-label="collapsible table"
                {...provided.droppableProps}
                ref={provided.innerRef}
                // sx={getDropWrapper(snapshot.isDraggingOver, theme)}
              >
                <TableHead
                  sx={{
                    // bgcolor: theme.palette.background.paper,
                    borderTop: "none",
                    borderBottomWidth: "1px",
                    "& th,& td": { whiteSpace: "nowrap" },
                  }}
                >
                  <TableRow>
                    <TableCell sx={{ pl: 3 }}>
                      <Tooltip title="Add User Story">
                        <Button
                          variant="dashed"
                          size="extraSmall"
                          color="secondary"
                        >
                          ADD
                        </Button>
                      </Tooltip>
                    </TableCell>
                    <TableCell>Id</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell />
                    <TableCell>State</TableCell>
                    <TableCell>Assigned To</TableCell>
                    <TableCell>Priority</TableCell>
                    <TableCell>Due Date</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody
                  sx={{
                    "& th,& td": { whiteSpace: "nowrap" },
                    // "& .MuiTableRow-root:last-of-type .MuiTable-root .MuiTableCell-root":
                    //   {
                    //     borderBottom: `1px solid ${theme.palette.divider}`,
                    //   },
                    "& .MuiTableRow-root:hover": { bgcolor: "transparent" },
                  }}
                >
                  {backlogs?.userStoryOrder.map((storyId, index) => {
                    const story = backlogs?.userStory.filter(
                      (item) => item.id === storyId
                    )[0];
                    return (
                      <UserStory key={story.id} story={story} index={index} />
                    );
                  })}
                  {provided.placeholder}
                </TableBody>
              </Table>
            )}
          </Droppable>
        </DragDropContext>
      </TableContainer>
    </Card>
  );
}
