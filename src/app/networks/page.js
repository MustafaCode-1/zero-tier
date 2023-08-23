import React from "react";
import styles from "@/app/styles/network.module.css";
import Image from "next/image";

const NetworkPage = () => {
  const features = [
    {
      title: "Individuals",
      image: "/game.png",
      points: [
          "Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere",
          "Conveniently share files and data, or even play LAN games with others",
          "Manage secure network access to users of choice",
        ],
    },
    {
        title: "IT Teams",
        image: "/cloud.png",
        points: [
            "Simplify your network stack by unifying VPNs, VLANs, and SD-WANs with one solution",
            "Build, manage, and observe any number of remote, on premise, or cloud networks with one management interface",
            "Easily provision remote access for all of your users",
        ],
    },
    {
        title: "DevOps",
        image: "/devops.png",
        points: [
            "Quickly build backplane networks spanning multiple cloud providers",
            "Save on performance, storage, and bandwidth",
        "Administrate and debug from anywhere",
        "Secure corporate network overlay and failover layer",
      ],
    },
    {
        title: "Embedded",
        image: "/network.png",
        points: [
        "Enjoy vastly superior network control and functionality",
        "Develop and manage products or services running on their own decentralized networks",
        "Create 4G/5G-capable secure networks for any IoT, edge or embedded device that can operate on 64MB of RAM",
      ],
    },
  ];

  return (
    <div>
      <h1 className={styles.networkHeading}>Secure networks for teams of any size</h1>
      <div className={styles.cardsContainer}>
        {features.map((feature, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={feature.image}
              alt="my logo image"
              width={150}
              height={150}
            />
            <h2>{feature.title}</h2>
            <ul>
              {feature.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkPage;
