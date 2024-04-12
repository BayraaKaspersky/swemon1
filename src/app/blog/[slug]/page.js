"use client";
import React from "react";
import Image from "next/image";
import "@/app/blog/single-page.module.css";
import chevronDown from "../../../../public/static/images/chevron-down.svg";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { getPostBySlug } from "@/app/lib/api";
import BlockContent from "@sanity/block-content-to-react";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import HuviHumuus from "@/components/HuviHumuus";
import AjilOlgogchid from "@/components/AjilOlgogchid";

export default async function SinglePage({ params }) {
  const serializers = {
    types: {
      block: (props) => {
        const { style = "normal", listItem } = props.node;

        switch (style) {
          case "h1":
            return <h1 style={{ color: "#000" }}>{props.children}</h1>;
          case "h2":
            return <h2 style={{ color: "#000" }}>{props.children}</h2>;
          case "blockquote":
            return (
              <blockquote style={{ color: "#000" }}>
                {props.children}
              </blockquote>
            );
          default:
            return (
              <>
                <div style={{ textAlign: "justify", color: "#000" }}>
                  <p
                    style={{
                      textAlign: "justify",
                      marginTop: 10,
                      color: "#000",
                    }}
                  >
                    {" "}
                    {props.children}{" "}
                  </p>
                  {"\n"}
                </div>
              </>
            );
        }
      },
      // Add serializers for other block types (e.g., image, list, code, etc.)
    },

    marks: {
      link: ({ mark, children }) => {
        return (
          <a
            href={mark.href}
            target="_blank"
            style={{ color: "blue", borderBottom: "1px solid blue" }}
          >
            {children}
          </a>
        );
      },
    },
  };

  const slug = params.slug;

  const getPost = async () => {
    const post = await getPostBySlug(slug);
    console.log(`post`, post);
    return post;
  };
  const post = await getPost();

  return (
    <>
      <div
        style={{ background: "white", margin: "0 auto", minHeight: "50vh" }}

        // className="grid grid-cols-6 gap-5 mt-10 p-5 container"
      >
        {/* <div className="col-span-2">{<HuviHumuus />}</div> */}
        <div className="col-span-4">
          <div className="single-page">
            {post ? (
              <>
                <h1
                  style={{
                    color: "#000",
                    fontFamily: "sans-serif",
                    fontWeight: 600,
                    fontSize: "1.5rem",
                    marginBottom: 10,
                  }}
                >
                  {post[0].title}
                </h1>

                <BlockContent
                  blocks={post[0].content}
                  serializers={serializers}
                />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
