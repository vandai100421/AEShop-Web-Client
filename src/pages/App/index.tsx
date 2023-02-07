import React, { FC, Suspense } from "react";
import ErrorBoundary from "pages/App/subcomponents/ErrorBoundary";
import { Route, Routes } from "react-router-dom";
import publicRoutes from "routes/route.public";
import authRoutes from "routes/route.auth";
import MainLayout from "pages/App/subcomponents/MainLayout";
import AuthLayout from "./subcomponents/AuthLayout";

const App: FC = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route element={<MainLayout />}>
          {publicRoutes.map(({ path, element }) => {
            const Element: FC = element;
            return (
              <Route
                key={path}
                path={path}
                element={
                  <Suspense fallback={null}>
                    <Element />
                  </Suspense>
                }
              />
            );
          })}
          <Route element={<AuthLayout />}>
            {authRoutes.map(({ path, element }) => {
              const Element: FC = element;
              return (
                <Route
                  key={path}
                  path={path}
                  element={
                    <Suspense fallback={null}>
                      <Element />
                    </Suspense>
                  }
                />
              );
            })}
          </Route>
        </Route>
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
