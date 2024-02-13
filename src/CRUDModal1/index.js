import React from 'react';
import Typography from '../Elements/Typography';
import Image from '../Elements/Image';
import Button from '../Elements/Button';
import RowContainer from '../Elements/RowContainer';
import Link from '../Elements/Link';
import Box from '../Elements/Box';
import Input from '../Elements/Input';
import ColumnContainer from '../Elements/ColumnContainer';
export default function CRUDModal1() {
  return (
    <Box
      className="max-w-[800px] w-[100%] bg-primary p-[1rem] "
      >
      <ColumnContainer className="items-start gap-3" >
        <RowContainer
          className="items-center justify-between w-[100%]"
          >
          <Typography
            className="text-[25px]  font-bold tracking-wider"
            variantType="h3">
            Add projects
          </Typography>
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIGZpbGw9IiM3ZjdlODMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUgMTcuNTg2YTEgMSAwIDEgMCAxLjQxNSAxLjQxNUwxMiAxMy40MTQgMTcuNTg2IDE5QTEgMSAwIDAgMCAxOSAxNy41ODZMMTMuNDE0IDEyIDE5IDYuNDE0QTEgMSAwIDAgMCAxNy41ODUgNUwxMiAxMC41ODYgNi40MTQgNUExIDEgMCAwIDAgNSA2LjQxNEwxMC41ODYgMTJ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
              size="20px"
               className= "w-6"></Image>
              </RowContainer>
        <ColumnContainer
          className=" px-0 w-[100%] gap-8"
          >
          <Box className="inline w-[100%]">
            <Typography className="inline text-[19px] tracking-tighter font-medium" variantType="subtitle">
              This dashboard displays 3 environments per project, and is linked
              to the Operations Dashboard. When you add or remove a project from
              one dashboard, GitLab adds or removes the project from the other.
            </Typography>
            <Link
              className="no-underline tracking-tighter font-medium pl-[5px] text-[19px]"
              href="#"
              target="_self">
              More information
            </Link>
          </Box>
          <RowContainer
            className="w-[100%] items-center pl-[10px] rounded-lg  border border-base-100 gap-4"
            >
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyLjAwNSA1MTIuMDA1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTA1Ljc0OSA0NzUuNTg3LTE0NS42LTE0NS42YzI4LjIwMy0zNC44MzcgNDUuMTg0LTc5LjEwNCA0NS4xODQtMTI3LjMxN0M0MDUuMzMzIDkwLjkyNiAzMTQuNDEuMDAzIDIwMi42NjYuMDAzUzAgOTAuOTI1IDAgMjAyLjY2OXM5MC45MjMgMjAyLjY2NyAyMDIuNjY3IDIwMi42NjdjNDguMjEzIDAgOTIuNDgtMTYuOTgxIDEyNy4zMTctNDUuMTg0bDE0NS42IDE0NS42YzQuMTYgNC4xNiA5LjYyMSA2LjI1MSAxNS4wODMgNi4yNTFzMTAuOTIzLTIuMDkxIDE1LjA4My02LjI1MWM4LjM0MS04LjM0MSA4LjM0MS0yMS44MjQtLjAwMS0zMC4xNjV6TTIwMi42NjcgMzYyLjY2OWMtODguMjM1IDAtMTYwLTcxLjc2NS0xNjAtMTYwczcxLjc2NS0xNjAgMTYwLTE2MCAxNjAgNzEuNzY1IDE2MCAxNjAtNzEuNzY2IDE2MC0xNjAgMTYweiIgZmlsbD0iIzdmN2U4MyIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
              size="20px"
              radius="4px" className="w-[20px]"></Image>
            <Input
              variant="input-base-filled"
              className="pt-[13px] pr-[0px] pb-[13px] pl-[5px] text-lg "
              placeholder="Search your projects"
              type="text"
              name="input"></Input>
          </RowContainer>
          <ColumnContainer
            className="items-start flex py-[10px] px-[0px] w-[100%] tracking-normal text-[14px] gap-5 "
            >
            <Typography className="self-center text-[19px] font-normal md:justify-start" variantType="subtitle">
              Showing 0 projects
            </Typography>
            <Typography className="text-[19px] font-normal" variantType="subtitle">
              Enter at least three characters to search
            </Typography>
          </ColumnContainer>
        </ColumnContainer>
        <RowContainer
          className="items-center justify-end w-[100%] gap-4  "
          >
          <Button variant="outlined-btn">Cancel</Button>
          <Button variant="outlined-btn">Add projects</Button>
        </RowContainer>
      </ColumnContainer>
    </Box>
  );
}
