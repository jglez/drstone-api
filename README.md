# Dr. Stone API
Dr. Stone is an awesome manga/anime about a high school kid named Senku Ishigami who loves science and possesses an encyclopedic knowledge of scientific laws, properties, and inventions. Senku's goal is to rebuild modern civilization with science after a mysterious event turns the entire human population into stone for 3,700 years.

## The goal
The goal of this project is to build an API that revolves around the Dr. Stone anime. I will start very basic as this will be my first API. For now, I plan to have only two resources: characters and episodes. Currently, this is an embedded fake database in the project. (just a separate file with an array of objects)

## Schema
For now, the schema for the characters resource is simply name and id. The schema for the episodes resource is id, name, episode, the Japanese air date, and the English air date.

An example of an episode object:
```
  {
    id: 1,
    name: "Stone World",
    episode: "S01E01",
    japanese_air_date: "July 5, 2019",
    english_air_date: "July 19, 2019"
  }
  ```

I will add more attributes once the technical aspects of the API is complete.

## Endpoints
For now, I plan to have four endpoints:
- Get all characters
- Get character by id
- Get all episodes
- Get episode by id
