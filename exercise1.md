# Exercise 11.1 – CI/CD Warm‑Up (Java ecosystem)

Imagine a six‑developer team working on a Spring‑Boot micro‑service that will be released next month.  To avoid late‑night “works on my machine” surprises, we build a pipeline with three standard stages.

**Linting.**  Java offers several mature linters.  *Checkstyle* enforces code conventions, while *PMD* detects common anti‑patterns.  A newer favourite is *Spotless*, which combines formatting (via Google‑Java‑Format) and static checks in one Gradle or Maven plugin.

**Testing.**  Unit tests run with *JUnit 5* and *AssertJ*, integration tests spin up disposable containers through *Testcontainers*, and code‑coverage is measured with *JaCoCo*.  These tasks attach naturally to Maven’s `test` phase or Gradle’s `check` task.

**Building.**  The service is packaged by *Maven* or *Gradle* into a fat JAR and also turned into a lightweight Docker image using *Jib* so the exact same artifact reaches every environment.

**CI platforms.**  Besides Jenkins and GitHub Actions, popular alternatives include *GitLab CI/CD* (deep GitLab integration), *CircleCI* (fast caching & parallelism), *Azure Pipelines* (good for hybrid Microsoft stacks), and the hosted but self‑managed option *Buildkite*.

**Cloud vs self‑hosted runners.**  A managed cloud runner wins on friction‑free setup, automatic scaling, and predictable per‑minute billing.  Self‑hosting gives total control, easier access to GPUs or private networks, and no third‑party code exposure.  Choosing requires data‑classification rules, forecasted build minutes, and the team’s DevOps bandwidth.  With six engineers and no regulatory blockers, starting in the cloud is pragmatic; we can migrate heavy jobs to on‑prem nodes later without changing pipeline definitions.

