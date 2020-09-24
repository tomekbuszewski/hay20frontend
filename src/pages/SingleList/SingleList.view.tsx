/**
 * @author tomek
 * @since 2020-09-19 20:19:29
 */

import * as React from "react";
import { Helmet } from "react-helmet";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { scroller, Element } from "react-scroll";

import { TransitionWrapper } from "@ui/Atoms";
import { Loader } from "@ui/Molecules";
import { Album, AddAlbum } from "@ui/Organisms";
import { StyledAlbumWrapper } from "@ui/Organisms/Album/Album.styles";
import { isToday } from "@services/isToday";
import { ViewProps as Props } from "@pages/SingleList/SingleList.typings";

const formatDate = (input: Date): string => {
  return input.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
  });
};

const View: React.FunctionComponent<Props> = ({
  activeAlbum,
  addAlbumHandler,
  albums,
  formValue,
  handleChange,
  handleSubmit,
  isLoading,
  listStart,
  listVisible,
  reorder,
  searchResults,
  setActiveAlbum,
  setListVisible,
  toggleAlbum,
}) => {
  if (isLoading) {
    return <Loader />;
  }

  React.useEffect(() => {
    const today = formatDate(new Date());

    scroller.scrollTo(today, {
      duration: 400,
      offset: -32,
    });
  }, []);

  return (
    <TransitionWrapper>
      <Helmet>
        <title>Single list</title>
      </Helmet>
      {albums.length < 100 && (
        <AddAlbum
          addAlbumHandler={addAlbumHandler}
          searchResults={searchResults}
          formValue={formValue}
          isVisible={listVisible}
          setFormVisible={setListVisible}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
      <DragDropContext onDragEnd={reorder}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul
              style={{ margin: "4rem 0 10rem 0", padding: 0 }}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {albums.map((item, i) => {
                const { id } = item;
                const setAsActive = () => {
                  setActiveAlbum(activeAlbum === id ? null : id);
                };

                const listenOn = new Date(listStart);
                listenOn.setDate(listenOn.getDate() + (item.order - 1));

                return (
                  <Draggable
                    key={item.id}
                    draggableId={String(item.id)}
                    index={item.order}
                  >
                    {(provided, { isDragging }) => (
                      <StyledAlbumWrapper
                        isActive={activeAlbum === id}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={provided.draggableProps.style}
                      >
                        <Element name={formatDate(listenOn)}>
                          <Album
                            as="article"
                            album={item}
                            toggle={toggleAlbum}
                            view={{
                              isActive: activeAlbum === id,
                              isToday: isToday(listenOn),
                              isListened: item.listened,
                              isDragging,
                            }}
                            list={{ listenOn, listPosition: item.order }}
                            onClick={setAsActive}
                          />
                        </Element>
                      </StyledAlbumWrapper>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </TransitionWrapper>
  );
};

export { View };
