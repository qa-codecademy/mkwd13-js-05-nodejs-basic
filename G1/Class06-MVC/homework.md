## Basic Requirement

As we built a student api on class 05 now it will be your homework to build a trainer api.

1. The trainer api needs to work with a list of trainer objects that look like this:
   - `id`: string;
   - `firstName`: string;
   - `lastName`: string;
   - `email`: string;
   - `isCurrentlyTeaching`: boolean;
   - `timeEmployed`: string (ex: 6 months or 1 year 3 months);
   - `coursesFinished`: number;
2. Create your trainers.json file and you can add some starting data here if you want to.
3. Add CRUD operations for the api:

   1. Get all trainers.
   2. Get trainer by id.
   3. Update Trainer Info.
   4. Add trainer.
   5. Delete trainer.
   6. Delete all trainers.

4. Add a public folder in the project that will serve an `index.html` statically on route `/home`

5. The structure of the application should follow the MVC structure we learned so far about (db -> model -> service -> controller -> route)
6. Create a Postman Collection, test your routes, export the collection and send it along with the solution.

## Bonus Requirement

The bonus is to add functionality with query params

1. Return only trainers that are currently teaching `?currentlyActive=true`
2. Sort trainers by the number of courses they have finished `?sortBy=coursesAsc` or `?sortBy=coursesDesc`.
3. In the public folder add an image of your choice that can be acessed using the route `/home/imageName.jpg` served statically.

**As always, if you have any questions you can reach us on email/class**
