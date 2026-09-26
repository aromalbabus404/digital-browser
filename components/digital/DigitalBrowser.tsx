"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DigitalNavigation from "./DigitalNavigation";
import WhatsAppButton from "./WhatsAppButton";
import Cover from "./Cover";
import Introduction from "./Introduction";
import About from "./About";
import PoolCollection from "./PoolCollection";
import ProjectBrowser from "./ProjectBrowser";
import ProjectDetailView from "./ProjectDetailView";
import ServicesBrowser from "./ServicesBrowser";
import Process from "./Process";
import PoolEquipment from "./PoolEquipment";
import ProductDetailView from "./ProductDetailView";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

import { Project, projectsData } from "@/data/projects";
import { Product, productsData } from "@/data/products";

export type AnimationStyle = "bookflip" | "parallax" | "flip" | "vertical";

export const DigitalBrowser: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [direction, setDirection] = useState<number>(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(false);
  const [animationStyle, setAnimationStyle] = useState<AnimationStyle>("bookflip");

  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const lastScrollTime = useRef<number>(0);

  const totalPages = 12;

  const sectionTitles = [
    { page: 1, title: "COVER" },
    { page: 2, title: "INTRODUCTION" },
    { page: 3, title: "ABOUT MASTER POOLS" },
    { page: 4, title: "POOL COLLECTION" },
    { page: 5, title: "PROJECTS" },
    { page: 6, title: "PROJECT DETAIL" },
    { page: 7, title: "SERVICES" },
    { page: 8, title: "PROCESS" },
    { page: 9, title: "POOL EQUIPMENT" },
    { page: 10, title: "PRODUCT DETAIL" },
    { page: 11, title: "TESTIMONIALS" },
    { page: 12, title: "CONTACT" },
  ];

  const handleNavigate = useCallback((targetPage: number) => {
    if (targetPage < 1 || targetPage > totalPages) return;
    setDirection(targetPage > currentPage ? 1 : -1);
    setCurrentPage(targetPage);
  }, [currentPage, totalPages]);

  const toggleAutoPlay = () => {
    setIsAutoPlay((prev) => !prev);
  };

  const toggleAnimationStyle = () => {
    const styles: AnimationStyle[] = ["bookflip", "parallax", "flip", "vertical"];
    const nextIdx = (styles.indexOf(animationStyle) + 1) % styles.length;
    setAnimationStyle(styles[nextIdx]);
  };

  // Auto Presentation Interval (every 6 seconds)
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => {
        const nextPage = prev === totalPages ? 1 : prev + 1;
        setDirection(1);
        return nextPage;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay, totalPages]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        handleNavigate(Math.min(totalPages, currentPage + 1));
      } else {
        handleNavigate(Math.max(1, currentPage - 1));
      }
    } else if (Math.abs(deltaY) > 50 && animationStyle === "vertical") {
      if (deltaY < 0) {
        handleNavigate(Math.min(totalPages, currentPage + 1));
      } else {
        handleNavigate(Math.max(1, currentPage - 1));
      }
    }
  };

  // Keyboard Navigation Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes((e.target as HTMLElement).tagName)) {
        return;
      }
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown") {
        handleNavigate(Math.min(totalPages, currentPage + 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") {
        handleNavigate(Math.max(1, currentPage - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, handleNavigate]);

  // Debounced Mouse Wheel Scroll Navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime.current < 800) return;

      if (e.deltaY > 50) {
        lastScrollTime.current = now;
        handleNavigate(Math.min(totalPages, currentPage + 1));
      } else if (e.deltaY < -50) {
        lastScrollTime.current = now;
        handleNavigate(Math.max(1, currentPage - 1));
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentPage, handleNavigate]);

  // Dynamic Premium Page Transition Styles
  const getVariants = () => {
    switch (animationStyle) {
      case "bookflip":
        return {
          enter: (dir: number) => ({
            x: dir > 0 ? "100%" : "-100%",
            rotateY: dir > 0 ? -75 : 75,
            scale: 0.88,
            opacity: 0,
            transformOrigin: dir > 0 ? "left center" : "right center",
            filter: "brightness(0.7) blur(4px)",
          }),
          center: {
            x: "0%",
            rotateY: 0,
            scale: 1,
            opacity: 1,
            transformOrigin: "center center",
            filter: "brightness(1) blur(0px)",
          },
          exit: (dir: number) => ({
            x: dir < 0 ? "100%" : "-100%",
            rotateY: dir < 0 ? 75 : -75,
            scale: 0.88,
            opacity: 0,
            transformOrigin: dir < 0 ? "right center" : "left center",
            filter: "brightness(0.7) blur(4px)",
          }),
        };

      case "flip":
        return {
          enter: (dir: number) => ({
            x: dir > 0 ? "80%" : "-80%",
            rotateY: dir > 0 ? 30 : -30,
            scale: 0.82,
            opacity: 0,
            filter: "blur(8px)",
          }),
          center: {
            x: "0%",
            rotateY: 0,
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
          },
          exit: (dir: number) => ({
            x: dir < 0 ? "80%" : "-80%",
            rotateY: dir < 0 ? -30 : 30,
            scale: 0.82,
            opacity: 0,
            filter: "blur(8px)",
          }),
        };

      case "vertical":
        return {
          enter: (dir: number) => ({
            y: dir > 0 ? "100%" : "-100%",
            scale: 0.94,
            opacity: 0,
            filter: "blur(6px)",
          }),
          center: {
            y: "0%",
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
          },
          exit: (dir: number) => ({
            y: dir < 0 ? "100%" : "-100%",
            scale: 0.94,
            opacity: 0,
            filter: "blur(6px)",
          }),
        };

      case "parallax":
      default:
        return {
          enter: (dir: number) => ({
            x: dir > 0 ? "100%" : "-100%",
            scale: 1.1,
            opacity: 0,
            filter: "brightness(1.4) blur(10px)",
          }),
          center: {
            x: "0%",
            scale: 1,
            opacity: 1,
            filter: "brightness(1) blur(0px)",
          },
          exit: (dir: number) => ({
            x: dir < 0 ? "100%" : "-100%",
            scale: 0.9,
            opacity: 0,
            filter: "brightness(0.6) blur(10px)",
          }),
        };
    }
  };

  const renderSection = () => {
    switch (currentPage) {
      case 1:
        return <Cover onStartExploring={() => handleNavigate(2)} />;
      case 2:
        return <Introduction onNext={() => handleNavigate(3)} />;
      case 3:
        return <About onNext={() => handleNavigate(4)} />;
      case 4:
        return (
          <PoolCollection
            onSelectCategory={() => handleNavigate(5)}
          />
        );
      case 5:
        return (
          <ProjectBrowser
            onOpenProjectDetail={(proj) => {
              setSelectedProject(proj);
              handleNavigate(6);
            }}
          />
        );
      case 6:
        return (
          <ProjectDetailView
            project={selectedProject || projectsData[0]}
            onClose={() => handleNavigate(5)}
          />
        );
      case 7:
        return <ServicesBrowser />;
      case 8:
        return <Process />;
      case 9:
        return (
          <PoolEquipment
            onOpenProductDetail={(prod) => {
              setSelectedProduct(prod);
              handleNavigate(10);
            }}
          />
        );
      case 10:
        return (
          <ProductDetailView
            product={selectedProduct || productsData[0]}
            onClose={() => handleNavigate(9)}
          />
        );
      case 11:
        return <Testimonials />;
      case 12:
        return <Contact />;
      default:
        return <Cover onStartExploring={() => handleNavigate(2)} />;
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-screen h-screen overflow-hidden bg-slate-950 text-white select-none"
      style={{ perspective: "1500px" }}
    >
      {/* Dynamic Ambient Fluid Light Orb */}
      <motion.div
        animate={{
          x: [(currentPage * 50) % 300, (currentPage * -40) % 250, (currentPage * 30) % 200],
          y: [(currentPage * 30) % 200, (currentPage * -50) % 180, (currentPage * 20) % 150],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none z-0"
      />

      {/* Top Header & Bottom Control Bar */}
      <DigitalNavigation
        currentPage={currentPage}
        totalPages={totalPages}
        onNavigate={handleNavigate}
        sectionTitles={sectionTitles}
        isAutoPlay={isAutoPlay}
        onToggleAutoPlay={toggleAutoPlay}
        animationStyle={animationStyle}
        onToggleAnimationStyle={toggleAnimationStyle}
      />

      {/* Main Full-Screen Section Content */}
      <main className="w-full h-full relative z-10">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={getVariants()}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full h-full transform-gpu shadow-2xl"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Sticky WhatsApp CTA */}
      <WhatsAppButton variant="floating" />
    </div>
  );
};

export default DigitalBrowser;
