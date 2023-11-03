This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


Ratings compoenen, not working: 

{}<Flex alignItems={"center"} justifyContent={"center"}>
<Flex
  alignitems={"center"}
  justifyContent={"center"}
  px={4}
  py={2}
  bg={"white"}
  rounded={"full"}
  ml={4}
  shadow="lg"
  cursor={"pointer"}
  _hover={{ bg: "gray.100" }}
  transition={"ease-in-out"}
  transitionDuration={"0.3s"}
>
  {<Menu>
   {/*  <BiStar fontSize={25} />
    <MenuButton mx={2} transition="all 0.2s" borderRadius={"md"}>
      Choose ratings
    </MenuButton> */}
    <MenuList>
      <MenuItem
        display={"flex"}
        alignitems={"center"}
        justifyContent={"space-around"}
        onClick={() => setRatings("")}
      >
        <Text fontSize={20} fontWeight={500} color={"gray.700"}>
          All Rating
        </Text>
      </MenuItem>
      <MenuItem
        display={"flex"}
        alignitems={"center"}
        justifyContent={"space-around"}
        onClick={() => setRatings(2)}
      >
        <Text fontSize={20} fontWeight={500} color={"orange.500"}>
          2.0
        </Text>
        {/* <Rating size="small" value={2} readOnly />  */}
      </MenuItem>
      <MenuItem
        display={"flex"}
        alignitems={"center"}
        justifyContent={"space-around"}
        onClick={() => setRatings(3)}
      >
        <Text fontSize={20} fontWeight={500} color={"orange.500"}>
          3.0
        </Text>
        {/* <Rating size="small" value={3} readOnly />  */}
      </MenuItem>
      <MenuItem
        display={"flex"}
        alignitems={"center"}
        justifyContent={"space-around"}
        onClick={() => setRatings(4)}
      >
        <Text fontSize={20} fontWeight={500} color={"orange.500"}>
          4.0
        </Text>
        {/* <Rating size="small" value={4} readOnly />  */}
      </MenuItem>
      <MenuItem
        display={"flex"}
        alignitems={"center"}
        justifyContent={"space-around"}
        onClick={() => setRatings(4.5)}
      >
        <Text fontSize={20} fontWeight={500} color={"orange.500"}>
          4.5
        </Text>
        {/* <Rating size="small" value={4.5} readOnly />  */}
      </MenuItem>
    </MenuList>
  </Menu>}
  <BiChevronDown fontSize={25} />
</Flex>

Denne her video bruger jeg: https://www.youtube.com/watch?v=655FcX4SesQ&t=295s


DMI API: 

Access Token: 40fa2e83-92fe-462c-ba2e-8392fed62c1b

example of use: curl -H "Authorization: Bearer 40fa2e83-92fe-462c-ba2e-8392fed62c1b" "https://dmiapi-rest.govcloud.dk/management/"

API key: 33ce7a87-94fc-4695-a3e5-f0399b9facfd

example of use: curl -X GET "https://dmigw.govcloud.dk/v2/metObs" -H "X-Gravitee-Api-Key: 33ce7a87-94fc-4695-a3e5-f0399b9facfd"