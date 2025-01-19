// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use serde::{Serialize, Deserialize};
use tauri::{Emitter, Manager};
use std::{process::{Command, Stdio}, thread, time::Duration};
use reqwest::blocking::get;

#[derive(Debug, Serialize,Clone)]
struct NetworkStatus {
    is_connected: bool,
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let app_handle = app.app_handle().clone();

            thread::spawn(move || {
                loop {
                    let status = NetworkStatus {
                        is_connected: get("https://www.google.com").is_ok()
                    };

                    if let Err(err) = app_handle.emit("network-status", status) {
                        eprintln!("Failed to emit network status: {:?}", err);
                    }

                    thread::sleep(Duration::from_secs(5));
                }
            });
            
            // // Pocket Base configurations
            // Command::new("./pocketbase/pocketbase")
            //     .arg("serve")
            //     .arg("--http=127.0.0.1:8090") // Change port if needed
            //     .stdout(Stdio::inherit())
            //     .stderr(Stdio::inherit())
            //     .spawn()
            //     .expect("Failed to start PocketBase server");

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running Tauri application");
}